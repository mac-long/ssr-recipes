export default function List({
	title,
	description,
	children,
}: { title: string; description: string; children: React.ReactNode }) {
	return (
		<>
			<div className="px-6">
				<div className="pb-2 border-b border-gray-300 sm:pb-4">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
						{title}.
					</h2>
					<p className="mt-2 text-lg leading-8 text-slate-600">{description}</p>
					{children}
				</div>
			</div>
		</>
	);
}
