import classNames from "classnames";
import Link from "next/link";
import { ButtonHTMLAttributes, HTMLrest, ReactNode } from "react";
import Spinner from "../Spinner";

export interface rest extends ButtonHTMLAttributes<HTMLButtonElement> {
	href?: HTMLrest<HTMLAnchorElement>["href"];
	newTab?: boolean;
	label?: string;
	icon?: ReactNode;
	primary?: boolean;
	ghost?: boolean;
	reverse?: boolean;
	loading?: boolean;
	spinnerColor?: string;
	fullWidth?: boolean;
}

export default function Button({
	href,
	newTab,
	label,
	icon,
	primary,
	ghost,
	reverse,
	loading,
	spinnerColor,
	fullWidth,
	...rest
}: rest) {
	const styles = classNames(
		primary && "primary",
		reverse && !href && "flex-row-reverse space-x-reverse",
		fullWidth && "w-full justify-center space-x-0.5",
		href && "justify-center",
		ghost && "ghost",
	);

	const button = (
		<button {...rest} type={rest.type || "button"} className={styles}>
			{icon && !href && <span className="icon">{icon}</span>}
			{loading && <Spinner color={spinnerColor} />}
			{label && <span>{label}</span>}
		</button>
	);

	return href ? (
		<Link
			href={href}
			passHref
			target={newTab ? "_blank" : "_self"}
			rel={newTab ? "noreferrer" : ""}
		>
			{button}
		</Link>
	) : (
		button
	);
}
