import { getAllRecipes } from "@/lib/db";

export async function GET(request: Request) {
	try {
		const recipes = await getAllRecipes(
			request.headers.get("Accept-Language")?.slice(0, 2) || "en",
		);

		return new Response(JSON.stringify(recipes), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ message: error }), {
			status: 500,
		});
	}
}
