import type { Props as StatisticProps } from '@/components/Atoms/Statistic';
import Statistic from '@/components/Atoms/Statistic';

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
