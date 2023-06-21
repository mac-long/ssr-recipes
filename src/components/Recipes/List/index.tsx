//@ts-nocheck
import RecipeCard from "@/components/Recipes/List/Card";
import { Database } from "@/lib/db";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function RecipeList({
	recipes,
	currentFilters,
}: {
	recipes: Omit<Database["recipe"], "image" | "creation_time">[] &
		Omit<Database["recipe_translation"], "id">[];
	currentFilters: object;
}) {
	return (
		<div id="recipes" className="mx-auto max-w-7xl">
			{recipes.length > 0 ? (
				<>
					{recipes
						.filter((recipe) => {
							const { meal, cuisine, query } = currentFilters;
							return (
								(meal === "All" || recipe.meal === meal) &&
								(cuisine === "All" || recipe.cuisine === cuisine) &&
								(query === "" || recipe.title?.toLowerCase().includes(query.toLowerCase()))
							);
						})
						.map((recipe) => (
							<RecipeCard key={recipe.id} {...recipe} />
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
