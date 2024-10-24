import { browser } from '$app/environment'
import { bestLang, currentLang } from '$lib/lang.svelte'
import type { LayoutLoad } from './$types'

export const prerender = false


function getBrowserLang() {
	return localStorage["lang"] ?? navigator.language
}

export const load: LayoutLoad = async ({ params }) => {

	if(browser && params.lang) {
		localStorage["lang"] = params.lang
	}

	const userLang = browser ? getBrowserLang() : 'en'

    const lang = bestLang(params.lang || userLang)

	currentLang.lang = lang

	return {
		lang: lang
	}
}
