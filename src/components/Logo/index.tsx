import { CakeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Logo() {
	return (
		<Link
			href="/"
			passHref
<<<<<<< HEAD
			className="flex flex-col items-center no-underline transition-colors duration-300 lg:flex-1 hover:text-teal-600 group"
=======
			className="flex flex-col items-center transition-colors duration-300 lg:flex-1"
>>>>>>> 5777bdca54111f00e82f5261d9a7a404125302a0
		>
			<CakeIcon className="w-12 h-12" />
			<h1 className="text-xl font-bold">SSR</h1>
		</Link>
	);
}
