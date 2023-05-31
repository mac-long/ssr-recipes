import classNames from "classnames";
import Link from "next/link";
import { useRouter } from 'next/router';

type Props = {
	href: string;
	label: string;
}

// get path, underline on sm:> highlight on mobile.
export default function MenuLink({href, label}: Props) {
	return <Link href={href} className={classNames("text-sm font-semibold ledaing-6", href !== useRouter().pathname && "text-teal-600 pb-1 border-teal-600 border-b-2")}>{label}</Link>;
}
