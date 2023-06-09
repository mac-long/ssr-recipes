import Button from "@/components/Button";
import Input from "@/components/Forms/Input";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function NewsletterForm() {

	return (
		<form
			className="flex gap-x-4 items-end mt-0 mb-10 max-w-md"
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
