import { newEmailRecipient } from "@/lib/db";
import Link from "next/link";

export default function Home() {
	const email = newEmailRecipient({ name: "test", email: "test@mail.com" });

	return (
		<>
			{JSON.stringify(email)}
			<Link href="/recipes" locale="de">
				About
			</Link>
		</>
	);
}
