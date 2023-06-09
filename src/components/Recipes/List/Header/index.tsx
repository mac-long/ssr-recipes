import { Database } from "@/lib/db";
import Filters from "../Filters";

export default function Header({
	title,
	description,
	filters,
}: {
	title: string;
	description: string;
	filters: {
		meals: Pick<Database["recipe_translation"], "meal">["meal"][];
		cuisines: Pick<Database["recipe_translation"], "cuisine">["cuisine"][];
	};
}) {
	return (
		<div className="px-6">
			<div className="pb-2 border-b border-gray-300 sm:pb-4">
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
