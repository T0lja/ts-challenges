<script lang="ts">
	import type { I18N } from '$lib/i18n/index'
	import { currentLang } from '$lib/lang.svelte.js'
	import { setContext } from 'svelte'

	let { data, children } = $props()

	setContext('lang', currentLang)

	setContext('i18n', {
		difficulties: ['warm-up', 'easy', 'medium', 'hard', 'extreme']
	} satisfies I18N)

	$effect(() => {
		document.documentElement.lang = currentLang.lang
		localStorage["lang"] = currentLang.lang
	})
</script>

<svelte:document lang={currentLang.lang} />

{@render children()}
