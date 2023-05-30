import Link from "next/link";
import { ButtonHTMLAttributes, HTMLProps, ReactNode } from "react";
import Spinner from "../Spinner";

interface Props {
	type?: ButtonHTMLAttributes<string>["type"];
	href?: HTMLProps<HTMLAnchorElement>["href"];
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
				${reverse && "flex-row-reverse space-x-reverse"}
				${fullWidth && "w-full justify-center space-x-0"}
			`}
		>
			{icon && <span>{icon}</span>}
			{loading && <Spinner color={spinnerColor} />}
			{label && <span>{label}</span>}
		</button>
	);

	return href ? (
		<Link href={href} passHref>
			{button}
		</Link>
	) : (
		button
	);
}
