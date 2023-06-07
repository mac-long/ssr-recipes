import { Database } from "@/lib/db";

export default function Ingredients({ ingredients }: Pick<Database["recipe_translation"], "ingredients">) {
	return (
		<>
			<h2>Ingredients</h2>
			<ul>
				{ingredients.map((ingredient) => (
					<li key={ingredient}>{ingredient}</li>
				))}
			</ul>
		</>
	);
}
