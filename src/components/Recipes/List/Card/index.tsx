//@ts-nocheck
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
	const dateString = new Date(created_on).toDateString();

	return (
		<Link href={`/recipes/${id}`} passHref className="no-underline">
			<div className="my-4 flex justify-between p-5 h-[150px] rounded-md shadow-md cursor-pointer hover:bg-gray-200 group">
				<div className="h-full flex flex-col justify-between">
					<h3 className="m-0 text-2xl font-semibold group-hover:text-teal-600">
						{title}
					</h3>
					<p className="max-w-sm m-0 text-xs leading-6 text-slate-600">
						<span>{summary}</span>
					</p>
				</div>
				<div className="flex flex-col space-y-2 items-end justify-between text-xs">
					<time dateTime={dateString} className="text-slate-500">
						{dateString}
					</time>
					<div className="flex justify-center space-x-1">
						<div className="tag">{meal}</div>
						<div className="tag">{cuisine}</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
