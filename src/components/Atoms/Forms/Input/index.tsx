import { InputHTMLAttributes } from "react";
type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...rest }: Props) {
	return (
		<>
			<label htmlFor={rest.name} className="sr-only">
				{rest.name}
			</label>
			<input {...rest} />
		</>
	);
}
