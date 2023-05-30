import Link from "next/link";
import { ButtonHTMLAttributes, HTMLProps, ReactNode } from "react";
import Spinner from "../Spinner";

interface Props {
	type?: ButtonHTMLAttributes<string>["type"];
	href?: HTMLProps<HTMLAnchorElement>["href"];
	newTab?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	label?: string;
	icon?: ReactNode;
	primary?: boolean;
	reverse?: boolean;
	loading?: boolean;
	spinnerColor?: string;
	disabled?: boolean;
	fullWidth?: boolean;
}

export default function Button({
	type,
	href,
	newTab,
	onClick,
	label,
	icon,
	primary,
	reverse,
	loading,
	spinnerColor,
	disabled,
	fullWidth,
}: Props) {
	const button = (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`
				${primary && "primary"}
				${reverse && !href && "flex-row-reverse space-x-reverse"}
				${fullWidth && "w-full justify-center space-x-0.5"}
				${href && "justify-center"}
			`}
		>
			{icon && !href && <span className="icon">{icon}</span>}
			{loading && <Spinner color={spinnerColor} />}
			{label && !href && <span>{label}</span>}
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
