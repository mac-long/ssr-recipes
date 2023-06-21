//@ts-nocheck
export default function Filter({ name, filters }) {
	return (
		<div className="flex flex-col items-start">
			<p className="font-bold m-0">Meal</p>
			<select id="Meal" name="Meal">
				{["All", ...filters].map((meal) => (
					<option key={meal} value={meal}>
						{meal}
					</option>
				))}
			</select>
		</div>
	);
}
