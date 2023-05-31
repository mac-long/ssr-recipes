export default function Statistic({
	text,
	count,
}: { text: string; count: number }) {
	return (
		<div className="flex flex-col mx-auto space-y-4 max-w-xs text-center">
			<dt className="leading-7">{text}</dt>
			<dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
				{count.toLocaleString("en")}
			</dd>
		</div>
	);
}
