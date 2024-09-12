<script lang="ts">
  import { createMaze } from "../../maze/engine/core";
  import { ExecutionWindow } from "../../components/execution-window.svelte"; 
  import Alert from "../../items/alert.svelte";
  import MazeRenderer from "../../maze/engine/renderer.svelte";
  
  export let w: number;
  export let height: number;
  export let desc: string = "迷路の中のアイコンを、ゴールまで導きましょう。";
  export let allowReset: boolean = true;

  const state = {
    maze: createMaze(w, h),
  };

  const goal = { x: w - 1, y: h - 1 };

  // ?????
  const globalFunctions = {
    [CUSTOM_MAZE_STEPFORWaRD]: () => {
      const currentCell =
        state.maze[state.self.location.y][state.self.location.x];
      const nextCell = moveInMaze(
        state.maze,
        currentCell,
        state.self.direction
      );
      if (!nextCell || currentCell.walls[state.self.direction])
        throw new Error("壁があるため、進むことができません。");

      state.self = { ...state.self, location: nextCell.location };
      if (nextCell.location.x === goal.x && nextCell.location.y === goal.y) {
        throw new BlocklyEditorMessage("迷路をクリアしました！");
      }
    },
    [CUSTOM_MAZE_CHECKWALL]: (direction: MazeDirection) => {
      return state.maze[state.self.location.y][state.self.location.x].walls[
        rotateDirection(state.self.direction, direction)
      ];
    },
    [CUSTOM_MAZE_TURN]: (to: MazeDirection) => {
      setState({
        ...state,
        self: {
          ...state.self,
          direction: rotateDirection(state.self.direction, to),
        },
      });
    },
  };

  let interval = 500;

  const { workspaceAreaRef, highlightBlock, getCode } = useBlocklyWorkspace({
    toolboxDefinition,
  });
  const interpreter = useBlocklyInterpreter({
    globalFunctions,
    executionInterval: interval,
    onStep: highlightBlock,
  });
</script>

    <div h="100%" templateColumns="1fr 25rem">
      <div ref={workspaceAreaRef} />
      <div overflow="auto">
        <div p={4}>
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
        </div>
        <hr />
        <div>
          <Alert />
          <div>
            <MazeRenderer
              maze={getState().maze}
              location={getState().self.location}
              direction={getState().self.direction}
            />
            </div>
          {#if allowReset}
            <button
              on:click={() => {
                state = createDefaultState(w, h);
              }}
            >
              新しい迷路にする
            </Button>
          {/if}
        </Box>
      </Box>
    </Grid>
  );
}
