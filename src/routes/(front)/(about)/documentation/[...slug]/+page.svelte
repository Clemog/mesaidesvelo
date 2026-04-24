<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { createElement } from 'react';
	import { createRoot } from 'react-dom/client';
	import { RulePage } from '@publicodes/react-ui';
	import { engine } from '$lib/engine';

	export let data;

	let domElement;
	let props;
	let root;

	function Link({ to, children }) {
		const onClick = (evt) => {
			evt.preventDefault();
			goto(to);
		};

		return createElement('a', { onClick }, children);
	}

	$: props = {
		renderers: { Link },
		documentationPath: '/documentation',
		rulePath: data.slug,
		engine,
		language: 'fr',
		npmPackage: 'publicodes-aides-velo',
		searchBar: true,
	};

	onMount(() => {
		if (domElement && !root) {
			root = createRoot(domElement);
		}
	});

	$: if (root && props) {
		root.render(createElement(RulePage, props));
	}
</script>

<svelte:head>
	<title>La documentation associée à la règle {data.slug}</title>
	<meta
		name="description"
		content="Parcourez les règles métiers et explications détaillées du calcul des aides vélo à {data.slug}."
	/>
</svelte:head>

<div bind:this={domElement} />
