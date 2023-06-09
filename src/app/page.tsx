import Select from "@/components/Forms/Select";

export default async function Home() {
	return (
		<div className="p-4">
			<Select
				name="Wonderful Select"
				options={[
					{ name: "Option 1", value: "Value 1" },
					{ name: "Option 2", value: "Value 2" },
				]}
			/>
		</div>
	);
}
