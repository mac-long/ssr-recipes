"use client";
import {
	CheckCircleIcon,
	ClipboardIcon,
	ShareIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";

interface Props {
	options: {
		id: number;
		icon?: ReactNode;
		href?: string;
		message?: string;
		copy?: boolean;
	}[];
	seperators?: boolean;
}

export default function Share({ options, seperators }: Props) {
	const [open, setOpen] = useState(true);
	const [copied, setCopied] = useState(false);
	const router = useRouter();
	const menuRef = useRef<HTMLDivElement>(null);
	const menuButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent<HTMLElement>) => {
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
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuRef, menuButtonRef]);

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
				className="grid place-items-center px-3 text-sm font-semibold bg-transparent rounded-md ring-1 ring-gray-300 ring-inset text-gray-900 shadow-sm hover:bg-gray-300"
				ref={menuButtonRef}
			>
				<ShareIcon className="w-5 h-5" />
			</button>
			{open && (
				<div
					ref={menuRef}
					className="absolute flex items-center mt-2 bg-white rounded-md ring-1 ring-gray-900 ring-opacity-5 shadow-lg focus:outline-none animate-fadeIn"
				>
					{options.map(({ id, icon, href, copy }, i) => (
						<>
							<div
								key={id}
								className="flex mx-1 first:ml-0 last:mr-0 items-center hover:bg-gray-300 p-2 first:rounded-l-md last:rounded-r-md"
							>
								{href && (
									<a href={href} className="button ghost w-full">
										{icon}
									</a>
								)}
								{copy && (
									<button type="button" onClick={triggerCopy} className="ghost w-full">
										{copied ? (
											<CheckCircleIcon className="text-green-500 animate-fadeIn" />
										) : (
											<ClipboardIcon />
										)}
									</button>
								)}
							</div>
							{seperators && i !== options.length - 1 && <div className="w-[1px] h-5 bg-gray-300" />}
						</>
					))}
				</div>
			)}
		</div>
	);
}
