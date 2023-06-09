import { TextareaHTMLAttributes } from "react";

type rest = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Input({ ...rest }: rest) {
	return (
		<>
			<label htmlFor={rest.name} className="sr-only">
				{rest.name}
			</label>
			<textarea {...rest} />
		</>
	);
}
