"use server";

import { CreatePost } from "@/types";
import { redirect } from "next/navigation";

export const createPost = async (data: CreatePost) => {
	console.log(data)
	redirect("/admin/posts")
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