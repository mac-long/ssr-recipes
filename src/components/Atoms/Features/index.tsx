import { ReactNode } from "react";

export interface Props {
	icon: ReactNode;
	name: string;
	description: string;
}

export default function Feature({ icon, name, description }: Props) {
	return (
		<div className="relative pl-16">
			<dt className="text-base font-semibold leading-7 text-slate-900">
				<div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-teal-600 rounded-lg">
					{icon}
				</div>
				{name}
			</dt>
			<dd className="mt-2 text-base leading-7 text-slate-600">{description}</dd>
		</div>
	);
}
