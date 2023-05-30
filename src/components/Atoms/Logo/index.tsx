import { CakeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Logo() {
	return (
		<Link
			href="/"
			passHref
			className="flex flex-col items-center transition-colors duration-300 lg:flex-1"
		>
			<CakeIcon className="w-12 h-12" />
			<h1 className="text-xl font-bold">SSR</h1>
		</Link>
	);
}
