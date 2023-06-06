import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Forms/Input";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import console from "console";

export default function NewsletterForm() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log(e);
		e.preventDefault();
	};

	return (
		<form
			className="flex gap-x-4 items-end mt-0 mb-10 max-w-md"
			onSubmit={handleSubmit}
		>
			<div className="flex flex-col space-y-4 text-white">
				<Input
					name="Name"
					type="text"
					required
					placeholder="What should we call you?"
				/>
				<Input
					name="Email"
					type="email"
					required
					placeholder="Your email address"
				/>
			</div>
			<Button
				label="Subscribe"
				type="submit"
				icon={<CheckCircleIcon className="text-green-500" />}
				primary
			/>
		</form>
	);
}
