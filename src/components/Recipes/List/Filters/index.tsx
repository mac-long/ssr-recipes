"use client";
import { RecipeTranslationTable, SetCurrentFilters } from "@/lib/db";
import {
	AdjustmentsVerticalIcon,
	MagnifyingGlassIcon,
	XCircleIcon,
} from "@heroicons/react/24/outline";
import Filter from "./Filter";

export default function Filters({
	filters,
	currentFilters,
	setCurrentFilters,
}: {
	filters: {
		meals: RecipeTranslationTable["meal"][];
		cuisines: RecipeTranslationTable["cuisine"][];
	};
	currentFilters: {
		meal: RecipeTranslationTable["meal"];
		cuisine: RecipeTranslationTable["cuisine"];
		query: string;
	};
	setCurrentFilters: SetCurrentFilters;
}) {
	return (
		<div className="space-y-2 w-full">
			<h3 className="flex items-center m-0 space-x-0.5 font-bold">
				<AdjustmentsVerticalIcon className="w-5 h-5" /> <span>Filters</span>
			</h3>
			<div className="flex items-start space-x-4">
				<Filter
					name="Meal"
					filters={filters.meals}
					currentFilters={currentFilters}
					setCurrentFilters={setCurrentFilters}
				/>
				<Filter
					name="Cuisine"
					filters={filters.cuisines}
					currentFilters={currentFilters}
					setCurrentFilters={setCurrentFilters}
				/>
			</div>
			<div className="flex justify-between items-center min-w-full border-b-2 border-slate-900 focus-within:border-teal-500">
				<MagnifyingGlassIcon className="w-5 h-5" />
				<input
					className="peer search"
					type="text"
					name="query"
					value={currentFilters?.query}
					onChange={(e) =>
						setCurrentFilters({ ...currentFilters, query: e.target.value })
					}
					placeholder="Enter a recipe title to search..."
				/>
				{currentFilters?.query !== "" && (
					<XCircleIcon
						className="ml-2 w-5 h-5 text-gray-400 cursor-pointer"
						onClick={() => setCurrentFilters({ ...currentFilters, query: "" })}
					/>
				)}
			</div>
		</div>
	);
}
