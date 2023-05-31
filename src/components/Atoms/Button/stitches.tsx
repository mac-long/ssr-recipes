import classNames from "classnames";
import Link from "next/link";
import { ButtonHTMLAttributes, HTMLProps, ReactNode } from "react";
import Spinner from "../Spinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	href?: HTMLProps<HTMLAnchorElement>["href"];
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
	type,
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
}: Props) {
	const styles = classNames(
		primary && "primary",
		reverse && !href && "flex-row-reverse space-x-reverse",
		fullWidth && "w-full justify-center space-x-0.5",
		href && "justify-center",
		ghost && "ghost",
	);

	const button = (
		<button type={type} className={styles} {...rest}>
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
