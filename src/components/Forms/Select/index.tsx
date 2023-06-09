"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { SelectHTMLAttributes, useState } from "react";

interface rest extends SelectHTMLAttributes<HTMLSelectElement> {
	options: {
		name: string;
		value: number | string;
	}[];
}

export default function Select({ options, ...rest }: rest) {
	const [open, setOpen] = useState<boolean>(false);
	const [selected, setSelected] = useState<number>(0);

	const toggleAndUpdate = (index: number) => {
		setOpen(!open);
		setSelected(index);
	};

	const styles = {
		button: classNames(
			"select",
			open && "rounded-b-none",
			!rest.multiple && "pr-2",
		),
		options: classNames(
			"options",
			open ? "animate-slideDown" : "animate-slideUp",
		),
		select: "m-0 bg-transparent appearance-none focus:ring-0",
	};

	return (
		<label htmlFor={rest.name}>
			{rest.multiple ? (
				<span>
					Select multiple with <kbd>⌘</kbd> or <kbd>Ctrl</kbd> +{" "}
					<kbd>Click</kbd>
				</span>
			) : (
				rest.name
			)}
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className={styles.button}
			>
				{options[selected].name}
				<select {...rest} className={styles.select}>
					{options.map((option, i) => (
						<option {...option} />
					))}
				</select>
				<span className="text-white icon">
					{!rest.multiple && (
						<>
							{!open ? (
								<ChevronDownIcon className="animate-rotate180" />
							) : (
								<ChevronUpIcon className="animate-rotate180" />
							)}
						</>
					)}
				</span>
			</button>
			{!rest.multiple && open && (
				<div className={styles.options} role="listbox">
					{options
						.filter((option) => option.name !== options[selected].name)
						.map((option, i) => (
							<button
								type="button"
								onClick={() => (setSelected(i), setOpen(!open))}
								onKeyDown={() => (setSelected(i), setOpen(!open))}
								className={`${styles.button} h-auto input`}
							>
								{option.name}
							</button>
						))}
				</div>
			)}
		</label>
	);
}
