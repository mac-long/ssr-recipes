import { allRecipes } from "@/lib/kysely";

export default async function Home() {
	const recipes = await allRecipes();

	return (
		<>
			<h1>{recipes[0].title}</h1>
		</>
	);
}
