import Feature, { Props as FeatureProps } from "@/components/Feature";

export default function NewsletterFeatures({
	features,
}: { features: FeatureProps[] }) {
	return (
		<dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
			{features?.map((feature: FeatureProps) => (
				<Feature key={feature.name} {...feature} />
			))}
		</dl>
	);
}
