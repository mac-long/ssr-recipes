import { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({ ...rest }: Props) {
	return (
		<>
			<label htmlFor={rest.name} className="sr-only">
				{rest.name}
			</label>
			<textarea {...rest} />
		</>
	);
}
