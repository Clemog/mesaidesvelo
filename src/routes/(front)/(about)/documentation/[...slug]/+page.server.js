/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	// TODO: add default value to slug ?
	return {
		slug: params.slug ?? '',
	};
}
