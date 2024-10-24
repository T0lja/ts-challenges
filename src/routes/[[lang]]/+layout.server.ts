import { bestLang } from "$lib/lang.svelte";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({params, locals}) => {


	
    const lang = bestLang(params.lang || "en")

	locals.lang = lang

	return {
		lang: lang
	}
};