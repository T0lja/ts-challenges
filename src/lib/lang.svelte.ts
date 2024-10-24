export type Lang = 'zh-CN' | 'en' | 'ja' | 'ko' | 'pt-BR'

export const languages: Lang[] = ['en', 'zh-CN', 'ja', 'ko', 'pt-BR']

export function bestLang(lang: string): Lang {
	if (languages.includes(lang as Lang)) {
		return lang as Lang
	}
	return 'en'
}

export class LangState {
	lang: Lang = $state('en')
}

export const currentLang = new LangState()
