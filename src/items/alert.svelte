<script lang="ts">
	import { onDestroy } from 'svelte';
	let remaining = 0;
	let title: string;
	let message: string;

	export function alert(title: string, message: string) {
		title = title;
		message = message;
		remaining = 3000;
	}
	const intervalId = setInterval(() => {
		if (remaining > 0) {
			remaining -= 100;
		}
	}, 100);
	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

{#if remaining > 0}
	<div class="alert-message">
		<h3 class="h3">{title}</h3>
		<p>{message}</p>
	</div>
{/if}
