//@ts-nocheck
import { getAllRecipes, getRecipeFilters } from "@/lib/db";
import RecipesContent from "./List/Content";
import Header from "./List/Header";

export default async function Recipes() {
	const recipes = await getAllRecipes("en");
	const filters = await getRecipeFilters("en");

	return (
		<section id="recipes">
			<div className="px-6 mb-8">
				<Header
					title="Recipes"
					description="Enjoy searching through our crazy assortment of cuisine from around the world."
				/>
				<RecipesContent recipes={recipes} filters={filters} />
			</div>
		</section>
	);
}
