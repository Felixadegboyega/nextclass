"use server";

import { CreatePost } from "@/types";
import dbConnect from "../dbConnect";
import { PostModel } from "../models/post";

export const createPost = async (data: CreatePost) => {
	await dbConnect();

	try {
		const response = await PostModel.create({
			more: data.body,
			title: data.title
		})

		return {
			success: true,
			message: "Post added successfully",
			data: response
		}
	} catch (error) {
		return {
			error,
			message: "An error occured",
			success: false
		}
	}

	// redirect("/admin/posts")
}

// export const createPost = async (formData: FormData) => {
// 	const title = formData.get("title");
// 	const body = formData.get("body");

// 	console.log({ title, body });
// 	redirect("/admin/posts")
// }

// export const deletePost = async (formData: FormData) => {
// 	"use server"

// }