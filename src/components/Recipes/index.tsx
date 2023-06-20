import Header from "./List/Header";

export default async function Recipes() {
	return (
		<section id="recipes">
			<Header
				title="Recipes"
				description="Enjoy searching through our crazy assortment of cuisine from around the world."
				filters={{
					meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Appetizer"],
					cuisines: ["American", "Chinese", "French", "Indian", "Italian"],
				}}
			/>
			{/* <RecipeList recipes={recipes} /> */}
		</section>
	);
}
