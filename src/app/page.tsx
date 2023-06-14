import Header from "@/components/Layout/Header";
import Recipes from "@/components/Recipes/index";

export default function Home() {
	return (
		<>
			{/* @ts-expect-error Server Component */}
			<Header />
			{/* @ts-expect-error Server Component */}
			<Recipes />
		</>
	);
}
