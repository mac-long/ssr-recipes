import Statistic, {
  Props as StatisicProps,
} from "@/components/Atoms/Generics/Statistic";

export default function Statistics({
	statistics,
}: { statistics: StatisicProps[] }) {
	return (
		<dl className="sm:flex sm:items-center sm:justify-center">
			{statistics.map(({ text, count }: StatisicProps) => (
				<Statistic text={text} count={count} />
			))}
		</dl>
	);
}
