import type { Lang } from "./lang.svelte"

export type Difficulty = 0 | 1 | 2 | 3 | 4

export const difficulties = ["warm", "easy", "medium", "hard", "extreme"]


export type I18NOf<T> = {
    [key in Lang]: T;
}

export type Question = {
    id: number
    slug: string
    tags: string[]
    related: number[]

    title: I18NOf<string>

    template: string
    testCases: string

    solution: string
    difficulty: Difficulty
}