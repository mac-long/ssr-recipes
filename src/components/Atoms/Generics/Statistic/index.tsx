import { useEffect, useState } from "react";

export default function Statistic({
	text,
	count,
}: { text: string; count: number }) {
	const [currentCount, setCurrentCount] = useState<number>(0);

	useEffect(() => {
		setTimeout(() => {
			if (currentCount < count)
				setCurrentCount(currentCount + Math.random() * 50);
			else if (currentCount >= count) setCurrentCount(count);
		}, Math.random() * 10);
	});

	return (
		<div className="flex flex-col mx-auto space-y-4 max-w-xs text-center">
			<dt className="leading-7">{text}</dt>
			<dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
				{Math.round(currentCount).toLocaleString("en")}
			</dd>
		</div>
	);
}
