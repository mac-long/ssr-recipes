//@ts-nocheck
export default function Filter({ name, filters, currentFilters, setCurrentFilters }) {
	return (
		<div className="flex flex-col items-start">
			<p className="font-bold m-0">Meal</p>
			<select id={name} name={name} onChange={(e) => setCurrentFilters({...currentFilters, [name.toLowerCase()]: e.target.value})}>
				{["All", ...filters].map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
}
