import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
	href: string;
	label: string;
};

export default function MenuLink({ href, label }: Props) {
	return (
		<Link
			href={href}
			className={classNames(
				"text-sm font-semibold ledaing-6 p-2 rounded-md",
					href === useRouter().pathname &&
					"bg-gray-300 sm:text-teal-600 sm:pb-1 border-teal-600 sm:border-b-2",
			)}
		>
			{label}
		</Link>
	);
}
