// See https://kit.svelte.dev/docs/types#app

import type { Lang } from '$lib/lang.svelte'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: Lang
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}
