import { Database } from "@/lib/db";
import Link from "next/link";

export default function RecipeCard({
	id,
	title,
	summary,
	cuisine,
	meal,
	created_on,
}: Pick<Database["recipe"], "id" | "created_on"> &
	Pick<
		Database["recipe_translation"],
		"cuisine" | "meal" | "title" | "summary"
	>) {
	// @ts-ignore
	const dateString = new Date(created_on).toLocaleDateString();

	return (
		<Link href={`/recipes/${id}`} passHref className="no-underline">
			<div className="flex flex-row-reverse justify-between p-10 rounded-md shadow-md cursor-pointer hover:bg-gray-200 group">
				<div className="flex flex-col justify-between items-end text-xs">
					<time dateTime={dateString} className="text-slate-500">
						{dateString}
					</time>
					<div className="flex justify-center space-x-1">
						<Link href={`/recipes/${meal}`} className="tag">
							{meal}
						</Link>
						<Link href={`/recipes/${cuisine}`} className="tag">
							{cuisine}
						</Link>
					</div>
				</div>
				<div>
					<h3 className="mb-2 text-lg font-semibold group-hover:text-teal-600">
						{title}
					</h3>
					<p className="max-w-sm text-xs leading-6 text-slate-600">
						<span>{summary}</span>
					</p>
				</div>
			</div>
		</Link>
	);
}
