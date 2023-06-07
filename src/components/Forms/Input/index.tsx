import { InputHTMLAttributes } from "react";
type rest = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...rest }: rest) {
	return (
		<label htmlFor={rest.name}>
			{rest.name}
			<input {...rest} id={rest.name} />
		</label>
	);
}
