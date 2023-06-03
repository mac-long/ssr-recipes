import type { Props as ButtonProps } from "@/components/Atoms/Button";
import Button from "@/components/Atoms/Button";
import HeroGradient from "@/components/Atoms/Gradients/HeroGradient";

export const someRandomCamelCase = "someRandomCamelCase";

interface Props {
	title: string;
	description: string;
	buttons: ButtonProps[];
}

export default function Hero({ title, description, buttons }: Props) {
	return (
		<div className='relative px-6 pb-40 pt-28 lg:px-8 isolate animate-fadeIn'>
			<HeroGradient />
			<div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-teal-500 to-blue-500">
						{title}
					</h1>
					<p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">{description}</p>
					<div className="flex items-center justify-center mt-10 gap-x-6">
						{buttons.map((button) => (
							<Button key={button.label} {...button} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
