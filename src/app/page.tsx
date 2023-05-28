import { getRecipeById } from "@/lib/kysely";

export default async function Home() {
	console.log("🚀 ~ file: page.tsx:5 ~ Home ~ recipes:", recipe);

	return (
		<>
			<h1>{`test${JSON.stringify(recipe)} `}</h1>
		</>
	);
}
