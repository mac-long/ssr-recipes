export default function Ingredients({
	ingredients,
}: { ingredients: string[] }) {
	return (
		<>
			<h2>Ingredients</h2>
			<ul>
				{ingredients.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
}
