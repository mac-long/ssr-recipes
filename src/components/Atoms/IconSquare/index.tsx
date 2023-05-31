import { ReactNode } from "react";

export default function Statistic({
	icon,
	bgColor = "bg-teal-600",
}: { icon: ReactNode; bgColor: string }) {
	return (
		<div
			className={`grid place-items-center w-10 h-10 rounded-lg ${
				bgColor && bgColor
			}`}
		>
			<span className="icons">{icon}</span>
		</div>
	);
}
