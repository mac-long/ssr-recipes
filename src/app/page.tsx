import Select from "@/components/Atoms/Forms/Select";
import Button from "@/components/Atoms/Generics/Button";

export default async function Home() {
	return (
		<div className="p-4">
			<h1>Home</h1>
			<Button label="name" primary />
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
