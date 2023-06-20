import Statistic, { Props as StatisticProps } from "./Statistic";

export default function Statistics({
	statistics,
}: { statistics: StatisticProps[] }) {
	return (
		<dl className="flex justify-center items-center">
			{statistics.map(({ text, count }: StatisticProps) => (
				<Statistic key={text} text={text} count={count} />
			))}
		</dl>
	);
}
