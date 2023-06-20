import Filters from "../Filters";

export default function Header({
	title,
	description,
	filters,
}: {
	title: string;
	description: string;
	filters: {
		meals: string[];
		cuisines: string[];
	};
}) {
	return (
		<div className="px-6 mb-8">
			<div className="pb-2 sm:pb-4">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
					{title}.
				</h2>
				<p className="mt-2 mb-5 text-lg leading-8 text-slate-600">
					{description}
				</p>
				<Filters filters={filters} />
			</div>
		</div>
	);
}
