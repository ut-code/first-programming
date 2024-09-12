<script lang="ts">
	import { type Maze, type MazeDirection, MazeDirectionMap, MazeDirections } from './core';

	const MAZE_CELL_SIZE = 10;
	const MAZE_PADDING = 1;

	export let maze: Maze;
	export let location: { x: number; y: number };
	export let direction: MazeDirection;
	let mazeWidth;
	$: mazeWidth = maze[0].length;
	let mazeHeight;
	$: mazeHeight = maze.length;

	export let rotation = MazeDirections.indexOf(direction);
	$: {
		const rotationDiff = (MazeDirections.indexOf(direction) - rotation) % 4;
		// this has been like this before I touched this.
		// I'm not gonna touch this shit.
		rotation += [
			rotationDiff - MazeDirections.length,
			rotationDiff,
			rotationDiff + MazeDirections.length
		].reduce((previous, current) => (Math.abs(previous) > Math.abs(current) ? current : previous));
	}
</script>

<svg
	width="100%"
	viewBox={[
		-MAZE_PADDING,
		-MAZE_PADDING,
		MAZE_CELL_SIZE * mazeWidth + MAZE_PADDING * 2,
		MAZE_CELL_SIZE * mazeHeight + MAZE_PADDING * 2
	].join(' ')}
>
	{#each maze as row, y}
		{#each row as cell, x}
			<g
				stroke="#000"
				stroke-width={0.6}
				stroke-linecap="round"
				transform={`translate(${x * MAZE_CELL_SIZE}, ${y * MAZE_CELL_SIZE})`}
			>
				{#if cell.walls[MazeDirectionMap.TOP]}
					<line x1={0} y1={0} x2={MAZE_CELL_SIZE} y2={0} />
				{/if}
				{#if cell.walls[MazeDirectionMap.RIGHT]}
					<line x1={MAZE_CELL_SIZE} y1={0} x2={MAZE_CELL_SIZE} y2={MAZE_CELL_SIZE} />
				{/if}
				{#if cell.walls[MazeDirectionMap.BOTTOM]}
					<line x1={0} y1={MAZE_CELL_SIZE} x2={MAZE_CELL_SIZE} y2={MAZE_CELL_SIZE} />
				{/if}
				{#if cell.walls[MazeDirectionMap.LEFT]}
					<line x1={0} y1={0} x2={0} y2={MAZE_CELL_SIZE} />
				{/if}
			</g>
			))
		{/each}
	{/each}
	<path
		transform={[
			'translate(',
			MAZE_CELL_SIZE * (mazeWidth - 1),
			',',
			MAZE_CELL_SIZE * (mazeHeight - 1),
			')'
		].join('')}
		d={[
			`M ${MAZE_CELL_SIZE * 0.35},${MAZE_CELL_SIZE * 0.2}`,
			`V ${MAZE_CELL_SIZE * 0.8}`,
			`H ${MAZE_CELL_SIZE * 0.4}`,
			`V ${MAZE_CELL_SIZE * 0.5}`,
			`L ${MAZE_CELL_SIZE * 0.7},${MAZE_CELL_SIZE * 0.35}`,
			`Z`
		].join(' ')}
		fill="#ccc"
	/>
	<path
		style="transition: '0.1s ease'"
		transform={[
			'translate(',
			(location.x + 0.5) * MAZE_CELL_SIZE,
			',',
			(location.y + 0.5) * MAZE_CELL_SIZE,
			')',
			`rotate(${rotation * 90})`
		].join('')}
		d={[
			`M 0,-${MAZE_CELL_SIZE * 0.3}`,
			`L ${MAZE_CELL_SIZE * 0.2},${MAZE_CELL_SIZE * 0.3}`,
			`L 0,${MAZE_CELL_SIZE * 0.15}`,
			`L -${MAZE_CELL_SIZE * 0.2},${MAZE_CELL_SIZE * 0.3}`,
			'Z'
		].join(' ')}
		fill="#f00"
	/>
</svg>
