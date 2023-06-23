//@ts-nocheck
import Background from "@/components/Recipes/Content/Background";
import Share from "@/components/Share";
import { getRecipeById } from "@/lib/db";
import { ArrowLeftIcon, CameraIcon, DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from 'next/link';
import CreationTime from "./CreationTime";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

export default async function RecipeContent({ id }: {
	id: string
}) {
	const { title, summary, ingredients, creation_time, instructions, image, meal } = await getRecipeById(Number(id), "en");

	return (
		<div className="overflow-hidden relative py-32 px-6 bg-white w-screen lg:overflow-visible lg:px-0 isolate min-h-screen">
			<Background />
			<div className="grid grid-cols-1 gap-x-8 gap-y-16 mx-auto max-w-2xl lg:grid-cols-2 lg:gap-y-10 lg:items-start lg:mx-0 lg:max-w-none animate-slideLeft">
				<div className="lg:grid lg:grid-cols-2 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:gap-x-8 lg:px-8 lg:mx-auto lg:w-full lg:max-w-7xl">
					<div className="lg:pr-4">
						<div className="lg:max-w-lg">
							<div className="flex items-start space-x-3 font-bold tracking-tight relative -ml-12 max-w-lg">
								<Link href="/#recipes" aria-label="Back to all recipes">
									<ArrowLeftIcon className="w-8 h-8" />
								</Link>
								<h1 className="text-6xl m-0">{title}</h1>
								<div className="flex-1 flex-grow"/>
								<Share
									options={[
										{
											id: 1,
											icon: <EnvelopeIcon />,
											message: "Check out this awesome recipe I found on SSR",
											href: "mailto:testing123",
										},
										{
											id: 2,
											icon: <DevicePhoneMobileIcon />,
											message: "Check out this awesome recipe I found on SSR",
											href: "sms:&body=wonderfulawesomeness.",
										},
									]}
								/>
							</div>
							<p className="mt-6 text-xl leading-8">{summary}</p>
							<Ingredients ingredients={ingredients} />
							<CreationTime time={creation_time} />
						</div>
						<Instructions instructions={instructions} />
					</div>
				</div>
				<div className="p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 animate-slideRight">
					<Image
						className="max-w-none h-auto bg-gray-900 rounded-xl ring-1 shadow-2xl sm:max-w-2xl w-[64rem] ring-gray-400/10"
						src={image.url}
						alt={`${title} a food for ${meal}.`}
						width={1024}
						height={672}
						priority
						placeholder="blur"
						blurDataURL="https://placehold.co/1024x672"
					/>
					<Link
						className="flex items-center w-64 text-xs font-extralight no-underline"
						href={image.photographer?.url || "https://openai.com/dalle"}
						target="_blank"
					>
						<CameraIcon className="mr-1 mb-1 w-6 h-6" />
						{image.photographer?.name || "DALL-E 2"}
					</Link>
				</div>
			</div>
		</div>
	);
}
