import { getAllFilters } from "@/lib/kysely";

export default async function Home() {
	const recipe = await getAllFilters("de");
	return (
		<>
			<h1>{JSON.stringify(recipe)}</h1>
		</>
	);
}
