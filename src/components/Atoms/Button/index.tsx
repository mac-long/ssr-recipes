import Link from "next/link";
import { ButtonHTMLAttributes, HTMLProps, SVGProps } from "react";
import Spinner from "../Spinner";

interface Props {
	type?: ButtonHTMLAttributes<string>["type"];
	href?: HTMLProps<HTMLAnchorElement>["href"];
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	label?: string;
	icon?: SVGProps<SVGSVGElement>;
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
				${primary && "bg-teal-600"}
				${reverse && "flex-row-reverse"}
				${fullWidth && "w-full"}
			`}
		>
			{loading && <Spinner color={spinnerColor} />}
			{icon && <span className="w-5 h-5">icon</span>}
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
