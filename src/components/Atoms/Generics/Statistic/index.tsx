import useInView from "@/lib/view";
import { useEffect, useRef, useState } from "react";

export interface Props {
	text: string;
	count: number;
}

export default function Statistic({ text, count }: Props) {
	const [currentCount, setCurrentCount] = useState<number>(0);
	const statsRef = useRef(null);
	const inView = useInView(statsRef, { threshold: 0.5 });

	useEffect(() => {
		if (inView) {
			setTimeout(() => {
				if (currentCount < count)
					setCurrentCount(currentCount + Math.random() * 50);
				else if (currentCount >= count) setCurrentCount(count);
			}, Math.random() * 10);
		} else return;
	}, [currentCount, count, inView]);

	return (
		<div
			ref={statsRef}
			className="flex flex-col mx-auto space-y-14 max-w-xs text-center"
		>
			<dt className="leading-7">{text}</dt>
			<dd className="order-first text-5xl font-semibold tracking-tight sm:text-5xl">
				{Math.round(currentCount).toLocaleString("en")}
			</dd>
		</div>
	);
}
