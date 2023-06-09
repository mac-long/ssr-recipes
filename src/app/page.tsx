import Filters from "@/components/Recipes/List/Filters";

export default async function Home() {
	return (
		<div className="p-4">
			<Filters filters={{ meals: [
				"Breakfast",
				"Brunch",
				"Lunch",
				"Dinner",
			], cuisines: [
				"American",
				"Chinese",
				"French",
				"Indian",
			] }} />
		</div>
	);
}
