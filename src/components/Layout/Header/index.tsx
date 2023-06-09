import Logo from "@/components/Logo";

export default function Header() {
	return (
		<header className="flex justify-between items-center py-4 px-6 w-full bg-white shadow-md">
			<Logo />
		</header>
	);
}
