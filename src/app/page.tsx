import { getAllRecipes, getRecipeById } from "@/lib/kysely";

export default async function Home() {
	const recipe = await getAllRecipes("de");
	return (
		<>
			<h1>{JSON.stringify(recipe)}</h1>
		</>
	);
}
