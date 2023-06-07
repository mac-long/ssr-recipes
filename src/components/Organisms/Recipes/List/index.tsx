import RecipeCard from "@/components/Molecules/Recipes/List/Card";
import { Database } from "@/lib/db";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function RecipeList({
	recipes,
}: {
	recipes: Omit<Database["recipe"], "image" | "creation_time">[] &
		Omit<Database["recipe_translation"], "id">[];
}) {
	return (
		<div className="px-6 mx-auto max-w-7xl sm:flex sm:items-center slg:px-8">
			{recipes.length > 0 ? (
				<div className="grid grid-cols-1 gap-x-8 pt-10 mx-auto space-y-4 max-w-2xl md:gap-y-8 md:space-y-0 lg:grid-cols-3 lg:mx-0 lg:max-w-none">
					{recipes.map((recipe) => (
						// @ts-ignore
						<RecipeCard {...recipe} />
					))}
				</div>
			) : (
				<div className="flex flex-col items-center pt-16 text-center">
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
