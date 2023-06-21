export default function Heading({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="pb-2 sm:pb-4">
			<h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
				{title}.
			</h2>
			<p className="mt-2 mb-5 text-lg leading-8 text-slate-600">
				{description}
			</p>
		</div>
	);
}
