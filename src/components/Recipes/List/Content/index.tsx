"use client";
import { Database, RecipeTranslationTable } from "@/lib/db";
import { useState } from "react";
import RecipeList from "..";
import Filters from "../Filters";

export default function RecipesContent({ recipes, filters }: {
	recipes: (Omit<Database["recipe"], "image" | "creation_time"> &
		Omit<Database["recipe_translation"], "id">)[];
		filters: {
			meals: RecipeTranslationTable["meal"][];
			cuisines: RecipeTranslationTable["cuisine"][];
		};
}): JSX.Element {
	const [currentFilters, setCurrentFilters] = useState({
		meal: "All",
		cuisine: "All",
		query: "",
	});

	return (
		<>
			<Filters
				filters={filters}
				currentFilters={currentFilters}
				setCurrentFilters={setCurrentFilters}
			/>
			<RecipeList recipes={recipes} currentFilters={currentFilters} />
		</>
	);
}
