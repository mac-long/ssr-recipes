"use client";
import {
	CheckCircleIcon,
	ClipboardIcon,
	ShareIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { MouseEvent, React, useEffect, useRef, useState } from "react";

interface Props {
	options: {
		id: number;
		icon?: React.ReactNode;
		href?: string;
		message?: string;
		copy?: boolean;
	}[];
	seperators?: boolean;
}

export default function Share({ options, seperators }: Props) {
	const [open, setOpen] = useState(false);
	const [copied, setCopied] = useState(false);
	const router = useRouter();
	const menuRef = useRef<HTMLDivElement>(null);
	const menuButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleClickOutside: EventListener = (e: Event) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(e.target as Node) &&
				menuButtonRef.current &&
				!menuButtonRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const triggerCopy = (e: MouseEvent<HTMLElement>) => {
		navigator.clipboard.writeText(router.asPath);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="relative">
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="grid place-items-center px-3 text-sm font-semibold text-gray-900 bg-transparent rounded-md ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-gray-300"
				ref={menuButtonRef}
			>
				<ShareIcon className="w-5 h-5" />
			</button>
			{open && (
				<div
					ref={menuRef}
					className="flex absolute items-center mt-2 bg-white rounded-md ring-1 ring-gray-900 ring-opacity-5 shadow-lg focus:outline-none animate-fadeIn"
				>
					{options.map(({ id, icon, href, copy }, i) => (
						<>
							<div
								key={id}
								className="flex items-center p-2 mx-1 first:ml-0 first:rounded-l-md last:mr-0 last:rounded-r-md hover:bg-gray-300"
							>
								{href && (
									<a href={href} className="w-full button blank">
										{icon}
									</a>
								)}
								{copy && (
									<button
										type="button"
										onClick={triggerCopy}
										className="w-full blank"
									>
										{copied ? (
											<CheckCircleIcon className="text-green-500 animate-fadeIn" />
										) : (
											<ClipboardIcon />
										)}
									</button>
								)}
							</div>
							{seperators && i !== options.length - 1 && (
								<div className="h-5 bg-gray-300 w-[1px]" />
							)}
						</>
					))}
				</div>
			)}
		</div>
	);
}
