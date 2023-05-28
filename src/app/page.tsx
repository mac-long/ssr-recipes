import { getAllFilters, getLatestRecipes } from "@/lib/kysely";

export default async function Home() {
	const recipe = await getLatestRecipes("de");
	return (
		<>
			<h1>{JSON.stringify(recipe)}</h1>
		</>
	);
}
