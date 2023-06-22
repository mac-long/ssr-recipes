//@ts-nocheck ! issue with Next.js 13
import Header from "@/components/Layout/Header";
import Recipes from "@/components/Recipes/index";

export default function Home() {
	return (
		<>
			<Header />
			<Recipes />
		</>
	);
}
