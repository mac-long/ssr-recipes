import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	test: boolean;
}

export default function Input({ test, ...rest }: Props) {
	return <input {...rest} />;
}