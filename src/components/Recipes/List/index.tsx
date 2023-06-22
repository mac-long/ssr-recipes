//@ts-nocheck
import { Database, RecipeTranslationTable } from "@/lib/db";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import RecipeCard from "./Card";

export default function RecipeList({
	recipes,
	currentFilters,
}: {
	recipes: (Omit<Database["recipe"], "image" | "creation_time"> &
		Omit<Database["recipe_translation"], "id">)[];
	currentFilters: RecipeTranslationTable["meal" | "cuisine"];
}) {
	const filteredRecipes = recipes.filter((recipe) => {
		return (
			(currentFilters.meal === "All" || recipe.meal === currentFilters.meal) &&
			(currentFilters.cuisine === "All" ||
				recipe.cuisine === currentFilters.cuisine) &&
			(currentFilters.query === "" ||
				recipe.title
					?.toLowerCase()
					.includes(currentFilters.query.toLowerCase()))
		);
	});

	return (
		<div id="recipes" className="mx-auto max-w-7xl pt-8">
			{filteredRecipes.length > 0 ? (
				<>
					{filteredRecipes.map((recipe) => (
						<RecipeCard key={Number(recipe.id)} {...recipe} />
					))}
				</>
			) : (
				<div className="flex flex-col items-center text-center">
					<QuestionMarkCircleIcon className="w-10 h-10" />
					<h3 className="m-0">No Recipes Here...</h3>
					<p className="max-w-xs">
						Try changing the meal and cuisine filters to see if we have some
						other options.
					</p>
				</div>
			)}
		</div>
	);
}
