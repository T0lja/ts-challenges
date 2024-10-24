<script lang="ts">
	import QuestionTag from '$lib/components/QuestionTag.svelte'
	import { getI18N, getLang } from '$lib/i18n'
	import type { Question } from '$lib/types'
	import ArrowRight from 'lucide-svelte/icons/arrow-right'
	import ArrowLeft from 'lucide-svelte/icons/arrow-left'

	type Props = {
		question: Question
		next: Question | undefined
		last: Question | undefined
	}

	const i18n = getI18N()
	const lang = getLang()

	let { question, next, last }: Props = $props()

	$inspect(next)
</script>

<section class="flex flex-row w-full justify-between px-2 py-1 gap-4 b-b toolbar">
	{#if last}
		<div class="flex flex-row gap-1 items-center">
			<ArrowLeft class="w-5" />
			<a href="/q/{last.id}"> Last </a>
		</div>
	{/if}

	<div class="flex flex-row gap-2 w-full">
		<span>{question.title[lang.lang]}</span>

		<QuestionTag class="w-fit px-1 rounded" difficulty={question.difficulty}>
			{i18n.difficulties[question.difficulty]}
		</QuestionTag>
	</div>

	{#if next}
		<div class="flex flex-row gap-1 items-center">
			<a href="/q/{next.id}"> Next </a>
			<ArrowRight class="w-5" />
		</div>
	{/if}
</section>
