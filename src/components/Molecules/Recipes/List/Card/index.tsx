import { Database } from "@/lib/db";
import Link from "next/link";

export default function RecipeCard({
	id,
	title,
	summary,
	cuisine,
	meal,
	created_on,
}: Omit<Database["recipe"], "image" | "creation_time"> &
	Database["recipe_translation"]) {
	const dateString = new Date(created_on).toLocaleDateString();

	return (
		<Link href={`/recipes/${id}`} passHref>
			<div className="flex flex-row-reverse group justify-between p-10 rounded-md hover:bg-gray-200 cursor-pointer shadow-md">
				<div className="flex flex-col items-end justify-between text-xs">
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
					<h3 className="text-lg font-semibold mb-2 group-hover:text-teal-600">
						{title}
					</h3>
					<p className="text-xs leading-6 text-slate-600 max-w-sm">
						<span>{summary}</span>
					</p>
				</div>
			</div>
		</Link>
	);
}
