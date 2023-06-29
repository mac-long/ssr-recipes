//@ts-nocheck
'use client'
import Button from "@/components/Button";
import Input from "@/components/Forms/Input";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function NewsletterForm() {
	const [formResponse, setFormResponse] = useState({
		status: null,
		message: "Subscribe",
	});

	const resetForm = () => {
		setTimeout(() => {
			setFormResponse({ status: null, message: "Subscribe" });
		}, 3000);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setFormResponse({ status: "loading", message: "Loading" });

		try {
			const response = await fetch("/api/newsletter", {
				method: "POST",
				body: JSON.stringify({
					name: e.target.Name.value,
					email: e.target.Email.value,
				}),
				headers: {
					"Content-Type": "application/json",
				}
			});

			if (response.status === 200) {
				setFormResponse({ status: "success", message: "Subscribed" });
			} else {
				const data = await response.json();
				setFormResponse({ status: "error", message: data.error });
				resetForm();
			}
		} catch (error) {
			setFormResponse({ status: "error", message: error });
			resetForm();
		}
	}

	return (
		<form className="flex gap-x-4 items-end mt-0 mb-10 max-w-md" onSubmit={handleSubmit}>
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
				label={formResponse.message}
				type="submit"
				icon={
					formResponse.status === 'success' ? (
						<CheckCircleIcon className="h-6 w-6 text-green-500" />
					) : formResponse.status === 'error' ? (
						<XCircleIcon className="h-6 w-6 text-red-500" />
					) : formResponse.status === 'loading' ? (
						<div
							className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
						/>
					) : null
				}
				primary
			/>
		</form>
	);
}
