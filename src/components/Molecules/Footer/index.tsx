import NewsletterFeatures from "./Features";
import NewsletterForm from "./Form";

export default function Footer() {
	return (
		<footer>
			<div className="overflow-hidden relative py-16 bg-gray-900 sm:py-24 lg:py-32 isolate">
				<div className="px-6 mx-auto max-w-7xl lg:px-8">
					<div className="grid grid-cols-1 gap-x-8 gap-y-16 mx-auto max-w-2xl lg:grid-cols-2 lg:max-w-none">
						<div className="max-w-xl lg:max-w-lg">
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
								Subscribe to our newsletter.
							</h2>
							<p className="mt-4 text-lg leading-8 text-slate-300">
								Be notified of our most recent recipes every week, so you
								constantly have new ideas flowing through you.
							</p>
						</div>
						<NewsletterForm />
						<NewsletterFeatures />
					</div>
				</div>
			</div>
		</footer>
	);
}
