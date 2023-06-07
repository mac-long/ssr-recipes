import { ClockIcon } from "@heroicons/react/24/outline";

export default function CreationTime({ time }: { time: number }) {
	return (
		<>
			<h2>Creation Time</h2>
			<span className="flex items-center font-bold leading-8 text-slate-700">
				<ClockIcon className="mr-1 w-6 h-6" />
				<span>{time < 1 ? `${time * 60} minutes` : `${time} hours`}</span>
			</span>
		</>
	);
}
