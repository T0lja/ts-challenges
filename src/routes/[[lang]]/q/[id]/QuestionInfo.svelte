<script lang="ts" module>
	import { gfmPlugin } from 'svelte-exmarkdown/gfm'
	import { highlightPlugin } from './highlight'
	const plugins = [gfmPlugin(), highlightPlugin]
	import rehypeRaw from 'rehype-raw'
</script>

<script lang="ts">
	import { getLang, type I18N } from '$lib/i18n'
	import type { I18NOf, Question } from '$lib/types'
	import Markdown from 'svelte-exmarkdown'

	type Props = {
		readme: string
		solution: string
	}

	const langState = getLang()

	const lang = $derived(langState.lang)

	let show = $state(false)

	const { readme, solution }: Props = $props()
</script>

<div>
	<Markdown md={readme} {plugins} />
</div>

<section class="flex flex-row items-center gap-1">
	<input type="checkbox" id="show_solution" bind:checked={show} />
	<label for="show_solution">Show</label>
</section>

{#if show}
	<div>
		<Markdown md={solution} plugins={[...plugins, { rehypePlugin: rehypeRaw }]} />
	</div>
{/if}
