import { RecipeTranslationTable, SetCurrentFilters } from "@/lib/db";

export default function Filter({
	name,
	filters,
	currentFilters,
	setCurrentFilters,
}: {
	name: RecipeTranslationTable["meal" | "cuisine"];
	filters: RecipeTranslationTable["meal" | "cuisine"][];
	currentFilters: {
		meal: RecipeTranslationTable["meal"];
		cuisine: RecipeTranslationTable["cuisine"];
		query: string;
	};
	setCurrentFilters: SetCurrentFilters
}) {
	return (
		<div className="flex flex-col items-start">
			<label htmlFor={name} className="font-bold m-0">
				{name}
				<select
					id={name}
					name={name}
					onChange={(e) =>
						setCurrentFilters({
							...currentFilters,
							[name.toLowerCase()]: e.target.value,
						})
					}
				>
					{["All", ...filters].map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</label>
		</div>
	);
}
