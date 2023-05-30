import { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	icon: ReactNode;
}

export default function Input({ icon, ...rest }: Props) {
	return (
		<>
			<label htmlFor={rest.name} className="sr-only">
				{rest.name}
			</label>
			<input {...rest} />
		</>
	);
}
