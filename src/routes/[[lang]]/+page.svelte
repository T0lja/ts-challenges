<script lang="ts">
	import { getI18N, getLang } from '$lib/i18n/index'
	import { bestLang, currentLang, languages } from '$lib/lang.svelte.js'

	let { data } = $props()

	const i18n = getI18N()
	const langState = getLang()
    
	const lang = $derived(langState.lang)



	// Function to handle changes
	function handleLanguageChange(event) {


		// You can handle the language change here
		currentLang.lang = bestLang(event.value.value)
	}
</script>

<main class="flex flex-col gap-4 p-3">
	<h1 class="text-4xl">Type Challenges</h1>

	<div class="flex flex-col gap-4">
		{#each data.questions as difficulty, i}
			<section class="flex flex-col gap">
				<h2 class="text-3xl">
					{i18n.difficulties[i]}
				</h2>

				<ol class="flex flex-row flex-wrap gap-2 gap-x-4">
					{#each difficulty as q}
						<a href="/q/{q.id}">
							<li data-difficulty={i} class="px-2 rounded">
								{q.id}&nbsp;&middot;&nbsp;{q.title[lang]}
							</li>
						</a>
					{/each}
				</ol>
			</section>
		{/each}
	</div>

	<div class="flex flex-row gap-3">
		{#each languages as langV}
			<label class="flex flex-row gap-1 items-center">
				<input
					type="radio"
					bind:group={langState.lang}
					value={langV}
					on:change={handleLanguageChange}
				/>
				{langV}
			</label>
		{/each}
	</div>
</main>

<style>
	li[data-difficulty='0'] {
		@apply bg-cyan text-black;
	}

	li[data-difficulty='1'] {
		@apply bg-green text-black;
	}

	li[data-difficulty='2'] {
		@apply bg-orange text-white;
	}

	li[data-difficulty='3'] {
		@apply bg-red text-white;
	}

	li[data-difficulty='4'] {
		@apply bg-purple text-white;
	}

	main {
		width: 1300px;
		margin: 0 auto;
	}
</style>
