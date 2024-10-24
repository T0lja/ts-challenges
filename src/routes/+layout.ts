import type { Question } from "$lib/types";
import type { LayoutLoad } from "./$types";


export const ssr = false

export const load: LayoutLoad = async ({fetch}) => {
    
    return {
        groupedQuestions: fetch("/data/questions-by-difficulty.json").then(r => r.json()) as Promise<Question[][]>
    }

};