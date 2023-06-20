"use client";
import {
	AdjustmentsVerticalIcon,
	XCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Filters({
	filters,
}: {
	filters: {
		meals: string[];
		cuisines: string[];
	};
}) {
	const [query, setQuery] = useState<string>("");

	return (
		<div className="space-y-2 w-full">
			<h3 className="flex items-center m-0 space-x-0.5 font-bold">
				<AdjustmentsVerticalIcon className="w-5 h-5" /> <span>Filters</span>
			</h3>
			<div className="flex items-start space-x-4">
				<div className="flex flex-col items-start justify-center">
					<p className="font-bold m-0">Meal</p>
					<select id="Meal" name="Meal">
						{filters.meals.map((meal) => (
							<option value={meal}>{meal}</option>
						))}
					</select>
				</div>
				<div className="flex flex-col items-start">
					<p className="font-bold m-0">Cuisine</p>
					<select id="Cuisine" name="Cuisine">
						{filters.cuisines.map((cuisine) => (
							<option value={cuisine}>{cuisine}</option>
						))}
					</select>
				</div>
			</div>
			<div className="flex justify-between items-center min-w-full border-b-2 sm:pt-4 border-slate-900 focus-within:border-teal-500">
				<input
					className="rounded-t-none border-0 ring-0 shadow-none search border-x-0"
					type="text"
					name="query"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Enter a recipe title to search..."
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
