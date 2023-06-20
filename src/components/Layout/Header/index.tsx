import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import { getRecipeCount } from "@/lib/db";
import { EnvelopeIcon, FireIcon } from "@heroicons/react/24/outline";

export default async function Header() {
	const recipeCount = await Number(getRecipeCount());

	return (
		<div className="min-h-screen">
			<Hero
				title="Fun Recipes to Try at Home."
				description="SSR is a super simple recipe blog that skips out on the 4 page story
before getting to the instructions, try making some of these crazy
good meals."
				buttons={[
					{ label: "Subscribe", href: "#footer", icon: <EnvelopeIcon /> },
					{
						label: "Get Cooking",
						href: "#recipes",
						icon: <FireIcon />,
						primary: true,
					},
				]}
			/>
			<Statistics
				statistics={[
					{ text: "Recipes", count: recipeCount },
					{ text: "Authors", count: 5 },
					{ text: "Categories", count: 10 },
				]}
			/>
		</div>
	);
}
