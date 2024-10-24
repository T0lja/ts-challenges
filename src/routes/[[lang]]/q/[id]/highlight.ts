
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/github.css'
import rehypeHighlight from 'rehype-highlight'
import type { Plugin } from 'svelte-exmarkdown'

export const highlightPlugin: Plugin = {
	rehypePlugin: [
		rehypeHighlight,
		{
			ignoreMissing: true,
			languages: {
				typescript
			}
		}
	]
}
