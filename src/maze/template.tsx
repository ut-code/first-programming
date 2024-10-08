import { useMemo, useRef, useState } from "react";
import { useGetSet } from "react-use";
import {
  Box,
  Divider,
  Grid,
  Alert,
  AlertIcon,
  AlertDescription,
  Button,
  Icon,
} from "@chakra-ui/react";
import { RiRestartLine } from "react-icons/ri";
import {
  createMaze,
  Maze,
  MazeDirection,
  MazeDirectionMap,
  moveInMaze,
  rotateDirection,
} from "./engine/core";
import {
  CUSTOM_MAZE_STEPFORWARD,
  CUSTOM_MAZE_TURN,
  CUSTOM_MAZE_CHECKWALL,
} from "./blocks";
import {
  CUSTOM_COMMON_IF,
  CUSTOM_COMMON_IF_ELSE,
  CUSTOM_COMMON_WHILE_TRUE,
  CUSTOM_COMMON_WHILE,
  CUSTOM_COMMON_DO_UNTIL,
} from "../common/blocks";
import { MazeRenderer } from "./engine/Renderer";
import {
  BlocklyEditorMessage,
  useBlocklyInterpreter,
} from "../common/interpreter";
import { ExecutionWindow } from "../components/ExecutionManager";
import {
  BlocklyToolboxDefinition,
  useBlocklyWorkspace,
} from "../common/blockly";

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
  allowReset: boolean; // sometime resetting is impossible, such as in 1x2 maze. use this in such case where resetting doesn't make sense.
  next: (() => void) | null; // what to do after clear
};

// NOTE: height should be less than width, otherwise it will overflow to the bottom. (try it)
// for a better look, height should be around 1/2 * width.
export function MazeWorkspace({
  width: w,
  height: h,
  description: desc = "迷路の中のアイコンを、ゴールまで導きましょう。",
  allowReset = true,
  next,
}: Variables): JSX.Element {
  const [getState, setState] = useGetSet(() => createDefaultState(w, h));
  const goal = useMemo(() => ({ x: w - 1, y: h - 1 }), [w, h]);
  const [cleared, setCleared] = useState(false);

  // ?????
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

  const [interval, setInterval] = useState(500);

  const { workspaceAreaRef, highlightBlock, getCode } = useBlocklyWorkspace({
    toolboxDefinition,
  });
  const interpreter = useBlocklyInterpreter({
    globalFunctions,
    executionInterval: interval,
    onStep: highlightBlock,
  });

  return (
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
          {
            /* cleared && */ next && (
              <Button onClick={next}>次のステージ</Button>
            )
          }
        </Box>
      </Box>
    </Grid>
  );
}
