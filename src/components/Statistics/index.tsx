import Statistic, { Props as StatisticProps } from "./Statistic";

export default function Statistics({
	statistics,
}: { statistics: StatisticProps[] }) {
	return (
		<dl className="sm:flex sm:justify-center sm:items-center">
			{statistics.map(({ text, count }: StatisticProps) => (
				<Statistic text={text} count={count} />
			))}
		</dl>
	);
}
