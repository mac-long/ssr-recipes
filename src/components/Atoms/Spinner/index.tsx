export default function Spinner({ color }: { color?: string }) {
	return (
		<span
			className={`inline-block w-5 h-5 rounded-full border-4 border-current border-solid animate-spin border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] ${color}`}
		/>
	);
}
