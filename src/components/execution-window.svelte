<script lang="ts">
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import type { BlocklyInterpreter } from '../common/interpreter';

	export let interval: number;
	export let setInterval: (interval: number) => void;
	export let interpreter: BlocklyInterpreter;
	export let onStart: () => void;
	export let onReset: () => void;
</script>

<div>
	<div>
		<span style="font-size: xl;"> 実行 </span>
		<div>
			<button style="color: blue" disabled={interpreter.state !== 'stopped'} on:click={onStart}>
				実行
			</button>
			{#if interpreter.state !== 'paused'}
				<button disabled={interpreter.state !== 'running'} on:click={interpreter.pause}>
					一時停止
				</button>
			{:else}
				<button on:click={interpreter.resume}> 再開 </button>
			{/if}
			<button
				disabled={interpreter.state === 'stopped'}
				on:click={() => {
					onReset();
					interpreter.stop();
				}}
			>
				リセット
			</button>
		</div>
	</div>
	<div>
		<span> 実行速度 </span>
		<div style="align: center">
			<span>遅い</span>
			<div>
				<RangeSlider
					name="Hello"
					min={0}
					max={1000}
					value={1000 - (Math.log((interval + 100) / 100) / Math.log(20)) * 1000}
					on:change={() => {
						setInterval(20 ** ((1000 - 500) / 1000) * 100 - 100);
					}}
				></RangeSlider>
			</div>
			<span>速い</span>
		</div>
	</div>
</div>
