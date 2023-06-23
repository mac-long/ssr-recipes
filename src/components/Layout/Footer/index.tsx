import {
	CalendarDaysIcon,
	GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";
import NewsletterFeatures from "./Features";
import NewsletterForm from "./Form";
import NewsletterHeader from "./Header";

const features = [
	{
		icon: <CalendarDaysIcon className="w-5 h-5" />,
		name: "Weekly Newsletter",
		description:
			"Regular meal updates is great for your health, both mental and physical. So enjoy recieving a variety of recipes.",
	},
	{
		icon: <GlobeEuropeAfricaIcon className="w-5 h-5" />,
		name: "Interesting Recipes",
		description:
			"We have a wide variety of recipes, in a range of cuisines, from Italian to Indian.",
	},
];

export default function Footer() {
	return (
		<footer id="newsletter">
			<div className="overflow-hidden relative py-16 bg-gray-900 sm:py-24 lg:py-32 isolate">
				<div className="px-6 mx-auto max-w-7xl lg:px-8">
					<div className="grid grid-cols-1 gap-x-8 gap-y-16 mx-auto max-w-2xl sm:gap-y-8 lg:max-w-none">
						<NewsletterHeader />
						<NewsletterForm />
						<NewsletterFeatures features={features} />
					</div>
				</div>
			</div>
		</footer>
	);
}
