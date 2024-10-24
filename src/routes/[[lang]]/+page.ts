import type { Question } from "$lib/types";
import type { PageLoad } from "./$types";



export const load: PageLoad = async ({fetch}) => {
    

     const questions = await (await fetch('/data/questions-by-difficulty.json')).json() as Pick<Question, "id" | "slug" | "title">[][]


     return {
        questions: questions
     }
     
    

};