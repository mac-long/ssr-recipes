import { CakeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Logo() {
	return (
		<Link
			href="#"
			passHref
			className="grid place-items-center no-underline transition-colors duration-300 lg:flex-1"
		>
			<CakeIcon className="w-24 h-24" />
			<h1 className="text-5xl font-bold">SSR</h1>
		</Link>
	);
}
