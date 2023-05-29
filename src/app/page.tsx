import { getAllRecipes, newRecipe } from "@/lib/kysely";

import Link from "next/link";

export default async function Home() {
	const recipes = await newRecipe(
		{
			creation_time: 1234567890, // Example creation time
			image: {
				url: "https://example.com/recipe-image.jpg" // Example image URL
			}
		},
		[
			{
				language_code: "en", // Example language code
				title: "Delicious Recipe", // Example title
				summary: "A tasty recipe for all occasions", // Example summary
				meal: "Dinner", // Example meal type
				cuisine: "International", // Example cuisine
				ingredients: ["Ingredient 1", "Ingredient 2"], // Example ingredients
				instructions: ["Step 1", "Step 2"] // Example instructions
			},
			{
				language_code: "de", // Example language code for German
				title: "Leckeres Rezept", // Example title in German
				summary: "Ein leckeres Rezept für alle Gelegenheiten", // Example summary in German
				meal: "Abendessen", // Example meal type in German
				cuisine: "International", // Example cuisine in German
				ingredients: ["Zutat 1", "Zutat 2"], // Example ingredients in German
				instructions: ["Schritt 1", "Schritt 2"] // Example instructions in German
			}
		]
	);

	return (
		<>
			{JSON.stringify(recipes)}
			<Link href="/recipes" locale="de">
				About
			</Link>
		</>
	);
}
