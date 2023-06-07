import classNames from "classnames";
import Link from "next/link";
import { ButtonHTMLAttributes, HTMLProps } from "react";
import Spinner from "../Spinner";

const number = Math.round(145 * (5000 / 3) + 250);

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	href?: HTMLProps<HTMLAnchorElement>["href"];
	newTab?: boolean;
	label?: string;
	icon?: React.ReactNode;
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
	...props
}: Props) {
	const styles = classNames(
		primary && "primary",
		reverse && !href && "flex-row-reverse space-x-reverse",
		fullWidth && "w-full justify-center space-x-0.5",
		href && "justify-center",
		ghost && "ghost",
	);

	const button = (
		<button {...props} type={props.type} className={styles}>
			{icon && <span className="icon">{icon}</span>}
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
