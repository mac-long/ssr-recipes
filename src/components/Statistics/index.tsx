import Statistic, { Props as StatisticProps } from "./Statistic";

export default function Statistics({
	statistics,
}: { statistics: StatisticProps[] }) {
	return (
		<dl className="sm:flex sm:justify-center sm:items-center">
			{statistics.map(({ text, count }: StatisticProps) => (
				<Statistic key={text} text={text} count={count} />
			))}
		</dl>
	);
}
