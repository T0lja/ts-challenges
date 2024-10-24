<script lang="ts">
	import type { Question } from '$lib/types'
	import type { Snippet } from 'svelte'

	type Props = {
        class: string
		difficulty: number
		children: Snippet
	}

	let { difficulty, class: className, children }: Props = $props()
</script>

<div class={className}  data-difficulty={difficulty}>
	{@render children()}
</div>

<style>
	div[data-difficulty='0'] {
		@apply bg-cyan text-black;
	}

	div[data-difficulty='1'] {
		@apply bg-green text-black;
	}

	div[data-difficulty='2'] {
		@apply bg-orange text-white;
	}

	div[data-difficulty='3'] {
		@apply bg-red text-white;
	}

	div[data-difficulty='4'] {
		@apply bg-purple text-white;
	}
</style>
