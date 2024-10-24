import { currentLang } from '$lib/lang.svelte'
import type { Question } from '$lib/types'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, params, parent, depends }) => {
	const data: Question = await (await fetch(`/data/${params.id}/info.json`)).json()

	const template: string = await (await fetch(`/data/${params.id}/template.ts`)).text()
	const solution: string = await (await fetch(`/data/${params.id}/solution.md`)).text()
	const tests: string = await (await fetch(`/data/${params.id}/test-cases.ts`)).text()

	const readme = await (await fetch(`/data/${params.id}/README.${currentLang.lang}.md`)).text()

	const { groupedQuestions } = await parent()

	const groupedQ = await groupedQuestions

	const next = getNextQuestion(groupedQ, data.id, data.difficulty)
	const last = getLastQuestion(groupedQ, data.id, data.difficulty)

	return {
		data: data,
		readme: readme,
		solution,
		template,
		tests,
		next,
		last
	}
}

function getNextQuestion(all: Question[][], id: number, difficulty: number): Question | undefined {
	const sameGroup = all[difficulty]

	const sameGroupNext = sameGroup[sameGroup.findIndex((q) => q.id == id) + 1]



	if (sameGroupNext) {        
		return sameGroupNext
	} else {      
		const nextGroup = all[difficulty + 1]
		return nextGroup?.at(0)
	}
}

function getLastQuestion(all: Question[][], id: number, difficulty: number): Question | undefined {
	const sameGroup = all[difficulty]

	const sameGroupLast = sameGroup[sameGroup.findIndex((q) => q.id == id) - 1]

	if (sameGroupLast) {
		return sameGroupLast
	} else {
		const lastGroup = all[difficulty - 1]
		if (lastGroup) {
			return lastGroup[lastGroup.length - 1]
		} else {
			return undefined
		}
	}
}
