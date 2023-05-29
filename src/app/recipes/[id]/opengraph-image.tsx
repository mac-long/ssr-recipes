import { getRecipeById } from "@/lib/db";
import { ImageResponse } from "next/server";

export const alt = "Awesome Recipe";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { id: number } }) {
	const recipe = await getRecipeById(params.id, "de");

	return new ImageResponse(
		<div
			style={{
				display: "flex",
				height: "100%",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
				fontSize: 60,
				letterSpacing: -2,
				fontWeight: 700,
				textAlign: "center",
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				width={100}
				height={100}
			>
				<title>Cake Icon</title>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
				/>
			</svg>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					backgroundImage:
						"linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))",
					backgroundClip: "text",
					color: "transparent",
				}}
			>
				{recipe?.title}
			</div>
			<p style={{ fontSize: 26 }}>{recipe?.summary}</p>
		</div>,
	);
}
