<script lang="ts">
	import { getLang } from '$lib/i18n/index'

	import { browser } from '$app/environment'
	import QuestionInfo from './QuestionInfo.svelte'
	import Toolbar from './Toolbar.svelte'

	let { data } = $props()
	const langState = getLang()

	const lang = $derived(langState.lang)
</script>

<svelte:head>
	<title>{data.data.title[lang]}</title>
</svelte:head>

<main>
	<section class="info flex flex-col gap-2">
		<Toolbar next={data.next} last={data.last} question={data.data} />

		<div class="flex flex-col p-2">
			<h1 class="text-4xl">
				{data.data.title[lang]}
			</h1>

			{#key data.data.id}
				<QuestionInfo readme={data.readme} solution={data.solution} />
			{/key}
		</div>
	</section>

	<section class="editor">
		{#if browser}
			{@const editor = import('./Editor.svelte')}
			{#await editor then { default: EditorComponent }}
				{#key data.data.id}
					<EditorComponent content={data.tests + '\n\n//solution: \n\n' + data.template} />
				{/key}
			{/await}
		{/if}
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: row;
		height: 100dvh;
	}

	.info {
		flex: 1;
		overflow-y: auto;
	}

	.editor {
		flex: 2;
		background-color: rebeccapurple;
	}
</style>
