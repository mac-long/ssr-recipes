export default function Instructions({
	instructions,
}: { instructions: string[] }) {
	return (
		<>
			<h2>Instructions</h2>
			<ol>
				{instructions.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ol>
		</>
	);
}
