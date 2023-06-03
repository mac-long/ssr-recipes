export default function Spinner({ color }: { color?: string }) {
	return <span className={`spinner ${color}`} />;
}
