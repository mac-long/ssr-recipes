import { Database } from "@/lib/db";

export default function Instructions({
	instructions,
}: Pick<Database["recipe_translation"], "instructions">) {
	return (
		<>
			<h2>Instructions</h2>
			<ol>
				{instructions.map((instruction) => (
					<li key={instruction}>{instruction}</li>
				))}
			</ol>
		</>
	);
}
