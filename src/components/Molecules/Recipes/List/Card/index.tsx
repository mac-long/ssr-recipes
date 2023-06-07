import { Database } from "@/lib/db";

export default function Card({
	id,
	title,
	summary,
	cuisine,
	meal,
}: Database["recipe"] & Database["recipe_translation"]) {
	return <h1>test</h1>;
}
