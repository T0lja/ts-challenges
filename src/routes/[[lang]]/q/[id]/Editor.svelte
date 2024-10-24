<script lang="ts" module>
	import * as monaco from 'monaco-editor'

	const pkgJson = {
		name: '@type-challenges/utils',
		types: 'index.d.ts',
		files: ['index.d.ts']
	}

	self.MonacoEnvironment = {
		getWorker: function (_: any, label: string) {
			if (label === 'typescript') {
				return new tsWorker()
			}
			return new editorWorker()
		}
	}

	monaco.languages.typescript.typescriptDefaults.addExtraLib(
		srcs,
		'file:///node_modules/@type-challenges/utils/index.d.ts'
	)

	monaco.languages.typescript.typescriptDefaults.addExtraLib(
		JSON.stringify(pkgJson),
		'file:///node_modules/@type-challenges/utils/package.json'
	)

	monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true)

	monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
		target: monaco.languages.typescript.ScriptTarget.ESNext,
		alwaysStrict: true,
		allowNonTsExtensions: true,
		moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
		module: monaco.languages.typescript.ModuleKind.ESNext,
		noEmit: true,
		esModuleInterop: true,
		baseUrl: './'
	})
</script>

<script lang="ts">
	import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
	import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
	import { onDestroy, onMount } from 'svelte'

	let model = $state<monaco.editor.ITextModel>()
	let editor = $state<monaco.editor.IStandaloneCodeEditor>()
	let editorElement = $state<HTMLDivElement>()

	type Props = {
		content: string
	}

	import srcs from './index.d.ts.src?raw'

	let { content }: Props = $props()

	onMount(async () => {
		model = monaco.editor.createModel(content, 'typescript', monaco.Uri.parse('solution.ts'))

		console.log(monaco.Uri.parse('solution.d.ts'))

		editor = monaco.editor.create(editorElement!, {
			theme: 'vs-dark',
			language: 'typescript',
			model: model!
		})
	})

	onDestroy(() => {
        model?.dispose()
		editor?.dispose()
	})
</script>

<div class="flex h-full w-full flex-col">
	<div class="flex-grow" bind:this={editorElement}></div>
</div>
