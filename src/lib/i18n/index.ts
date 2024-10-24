import type { Lang, LangState } from "$lib/lang.svelte"
import { getContext } from "svelte"

export type I18N = {
    difficulties: string[]
}


export function getI18N() {
    return getContext<I18N>("i18n")
}

export function getLang() : LangState {
    return getContext<LangState>("lang")
}