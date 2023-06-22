//@ts-nochec
"use client";
import { useState } from "react";
import RecipeList from "..";
import Filters from "../Filters";

export default function RecipesContent({ recipes, filters }) {
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
