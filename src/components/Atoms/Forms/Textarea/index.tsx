import { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Input({ ...rest }: Props) {
	return (
		<>
			<label htmlFor={rest.name} className="sr-only">
				{rest.name}
			</label>
			<textarea {...rest} />
		</>
	);
}
