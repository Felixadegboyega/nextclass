import { PostModel } from "@/app/models/post";
import { NextRequest } from "next/server";

export const GET = async (
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) => {
	const { id } = await params;

	const post = PostModel.findById(id);
	return Response.json({
		success: true,
		data: post
	})
}

export const DELETE = async (
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) => {
	const { id } = await params;

	const post = PostModel.deleteOne({ _id: id });

	return Response.json({
		success: true,
		data: post
	})
}