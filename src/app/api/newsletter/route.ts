//@ts-nocheck
import {
	checkForRecipient,
	newEmailRecipient,
	verifyEmailRecipient,
} from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const recipient = await request.json();
		const existingRecipient = await checkForRecipient(recipient.email);

		if (existingRecipient && !existingRecipient.email_verified) {
			throw new Error("Email not yet verified!");
		} else if (existingRecipient) {
			throw new Error("Email already exists!");
		}

		await newEmailRecipient(recipient);
		return NextResponse.json({ message: "success" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const email = searchParams.get("email");

		if (!email) {
			throw new Error("Email parameter is required");
		}

		const recipient = await checkForRecipient(email);

		if (!recipient) {
			throw new Error("Recipient not found");
		}

		if (recipient.email_verified) {
			throw new Error("Email already verified");
		}

		await verifyEmailRecipient(email);
		return NextResponse.json({ message: "success" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
