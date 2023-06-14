"use client";
import { Database } from "@/lib/db";
import {
	AdjustmentsVerticalIcon,
	XCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Filters({
	filters,
}: {
	filters: {
		meals: Pick<Database["recipe_translation"], "meal">[];
		cuisines: Pick<Database["recipe_translation"], "cuisine">[];
	};
}) {
	const [query, setQuery] = useState<string>("");

	return (
		<div className="space-y-2 w-full">
			<h3 className="flex items-center m-0 space-x-0.5 font-bold">
				<AdjustmentsVerticalIcon className="w-5 h-5" /> <span>Filters</span>
			</h3>
			<div className="flex items-start space-x-4">
				{/*<Select*/}
				{/*  name="Meal"*/}
				{/*  options={filters.meals.map((meal) => ({*/}
				{/*    name: String(meal),*/}
				{/*    value: String(meal),*/}
				{/*  }))}*/}
				{/*/>*/}
				{/*<Select*/}
				{/*  name="Cuisine"*/}
				{/*  options={filters.cuisines.map((cuisine) => ({*/}
				{/*    name: String(cuisine),*/}
				{/*    value: String(cuisine),*/}
				{/*  }))}*/}
				{/*/>*/}
			</div>
			<div className="flex justify-between items-center min-w-full border-b-2 sm:pt-4 border-slate-900">
				<input
					className="rounded-t-none border-0 border-teal-900 ring-0 shadow-none search border-x-0"
					type="text"
					name="query"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Enter a recipe title..."
				/>
				{query?.length > 0 && (
					<XCircleIcon
						className="ml-2 w-5 h-5 text-gray-400 cursor-pointer"
						onClick={() => setQuery("")}
					/>
				)}
			</div>
		</div>
	);
}
