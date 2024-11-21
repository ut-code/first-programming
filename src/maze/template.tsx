import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Divider,
  Grid,
  Icon,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiRestartLine } from "react-icons/ri";
import { useGetSet } from "react-use";
import {
  type BlocklyToolboxDefinition,
  useBlocklyWorkspace,
} from "../common/blockly";
import {
  CUSTOM_COMMON_DO_UNTIL,
  CUSTOM_COMMON_IF,
  CUSTOM_COMMON_IF_ELSE,
  CUSTOM_COMMON_WHILE,
  CUSTOM_COMMON_WHILE_TRUE,
} from "../common/blocks";
import {
  BlocklyEditorMessage,
  useBlocklyInterpreter,
} from "../common/interpreter";
import { ExecutionWindow } from "../components/ExecutionManager";
import {
  CUSTOM_MAZE_CHECKWALL,
  CUSTOM_MAZE_STEPFORWARD,
  CUSTOM_MAZE_TURN,
} from "./blocks";
import { MazeRenderer } from "./engine/Renderer";
import {
  type Maze,
  type MazeDirection,
  MazeDirectionMap,
  createMaze,
  moveInMaze,
  rotateDirection,
} from "./engine/core";
import { ClearDialog } from "../components/Dialogs/ClearDialog";

type MazeWorkspaceStateSelf = {
  location: { x: number; y: number };
  direction: MazeDirection;
};

type MazeWorkspaceState = {
  maze: Maze;
  self: MazeWorkspaceStateSelf;
};

const defaultSelf: MazeWorkspaceStateSelf = {
  location: { x: 0, y: 0 },
  direction: MazeDirectionMap.BOTTOM,
};

function createDefaultState(w: number, h: number): MazeWorkspaceState {
  return {
    maze: createMaze(w, h),
    self: defaultSelf,
  };
}

const toolboxDefinition: BlocklyToolboxDefinition = {
  type: "flyout",
  blockTypes: [
    CUSTOM_MAZE_STEPFORWARD,
    CUSTOM_MAZE_TURN,
    CUSTOM_MAZE_CHECKWALL,
    CUSTOM_COMMON_IF,
    CUSTOM_COMMON_IF_ELSE,
    CUSTOM_COMMON_WHILE_TRUE,
    CUSTOM_COMMON_WHILE,
    CUSTOM_COMMON_DO_UNTIL,
  ],
};

type Variables = {
  width: number;
  height: number;
  description?: string;
  allowReset: boolean; // sometimes resetting is impossible, such as in 1x2 maze. use this in such case where resetting doesn't make sense.
  prev: (() => void) | null; // what to do on "go back" button
  next: (() => void) | null; // what to do after clear
};

// NOTE: height should be less than width, otherwise it will overflow to the bottom. (try it)
// for a better look, height should be around 1 ~ 1/2 * width.
export function MazeWorkspace({
  width: w,
  height: h,
  description: desc = "迷路の中のアイコンを、ゴールまで導きましょう。",
  allowReset = true,
  prev,
  next,
}: Variables): JSX.Element {
  const [getState, setState] = useGetSet(() => createDefaultState(w, h));
  const goal = { x: w - 1, y: h - 1 };
  const [cleared, setCleared] = useState(false);
  const [showClearDialog, setShowClearDialog] = useState(false);

  const globalFunctions = useRef({
    [CUSTOM_MAZE_STEPFORWARD]: () => {
      const state = getState();
      const currentCell =
        state.maze[state.self.location.y][state.self.location.x];
      const nextCell = moveInMaze(
        state.maze,
        currentCell,
        state.self.direction
      );
      if (!nextCell || currentCell.walls[state.self.direction])
        throw new Error("壁があるため、進むことができません。");
      setState({
        ...state,
        self: { ...state.self, location: nextCell.location },
      });
      if (nextCell.location.x === goal.x && nextCell.location.y === goal.y) {
        setCleared(true);
        setShowClearDialog(true);
        throw new BlocklyEditorMessage("迷路をクリアしました！");
      }
    },
    [CUSTOM_MAZE_CHECKWALL]: (direction: MazeDirection) => {
      const state = getState();
      return state.maze[state.self.location.y][state.self.location.x].walls[
        rotateDirection(state.self.direction, direction)
      ];
    },
    [CUSTOM_MAZE_TURN]: (to: MazeDirection) => {
      const state = getState();
      setState({
        ...state,
        self: {
          ...state.self,
          direction: rotateDirection(state.self.direction, to),
        },
      });
    },
  }).current;

  const [interval, setInterval] = useState(100);

  const { workspaceAreaRef, highlightBlock, getCode } = useBlocklyWorkspace({
    toolboxDefinition,
  });
  const interpreter = useBlocklyInterpreter({
    globalFunctions,
    executionInterval: interval,
    onStep: highlightBlock,
  });

  return (
    <>
      <Grid h="100%" templateColumns="1fr 25rem">
        <div ref={workspaceAreaRef} />
        <Box overflow="auto">
          <Box p={4}>
            <ExecutionWindow
              interpreter={interpreter}
              interval={interval}
              setInterval={setInterval}
              onStart={() => {
                interpreter.start(getCode());
              }}
              onReset={() => {
                setState({ ...getState(), self: defaultSelf });
              }}
            />
          </Box>
          <Divider my={3} />
          <Box p={4}>
            <Alert mb={5}>
              <AlertIcon />
              <AlertDescription>{desc}</AlertDescription>
            </Alert>
            <Box mb={5}>
              <MazeRenderer
                maze={getState().maze}
                location={getState().self.location}
                direction={getState().self.direction}
              />
            </Box>
            {allowReset && (
              <Button
                leftIcon={<Icon as={RiRestartLine} />}
                onClick={() => {
                  setState(createDefaultState(w, h));
                }}
              >
                新しい迷路にする
              </Button>
            )}
          </Box>
          <Box pl={4}>
            {prev && <Button onClick={prev}>前のステージへ</Button>}
            {next && (
              <Button
                variant={cleared ? "solid" : "unstyled"}
                onClick={next}
                px={4}
                type="button"
                transition="color 0.2s, opacity 0.2s"
                colorScheme="blue"
              >
                次のステージへ
              </Button>
            )}
          </Box>
        </Box>
      </Grid>
      <ClearDialog
        visible={showClearDialog}
        next={
          next
            ? () => {
                setShowClearDialog(false);
                next();
              }
            : null
        }
        onClose={() => setShowClearDialog(false)}
        home={() => {
          window.location.href = "https://kf75.utcode.net";
        }}
      />
    </>
  );
}
