import dbConnect from "@/app/dbConnect"
import { PostModel } from "@/app/models/post"
import { NextRequest } from "next/server";

export const GET = async () => {
	await dbConnect()
	const data = await PostModel.find();
	return Response.json(data);
}

export const POST = async (request: NextRequest) => {
	await dbConnect()
	const body = await request.json();
	if (!body) {
		return Response.json({
			success: false,
			message: "Request Data not found"
		})
	}

	const data = await PostModel.create({
		title: body.title,
		more: body.more
	});

	return Response.json(data);
}