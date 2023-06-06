import "./global.css";

export const metadata = {
	title: "Super Simple Recipes",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="scroll-smooth">
				<main className="prose">{children}</main>
			</body>
		</html>
	);
}
