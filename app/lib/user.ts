"use server"

import { ENV } from "@/utils";
import dbConnect from "../dbConnect"
import { UserModel } from "../models/user"
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export type FormState =
	| {
		errors?: {
			name?: string[]
			email?: string[]
			password?: string[]
		}
		message?: string
	}
	| undefined


export const register = async (state: FormState, formData: FormData) => {

	try {
		// validate formData;
		const firstname = formData.get("firstname");
		const lastname = formData.get("lastname");
		const email = formData.get("email");
		const password = formData.get("password");

		await dbConnect()
		const user = await UserModel.create({
			firstname, lastname, email, password
		})

		if (!user) {
			return {
				success: false,
				message: "Couldn't register new user at the moment, please try again."
			}
		}

		const token = jwt.sign(
			{ _id: user._id, },
			ENV("JWT_SECRET"),
			{ expiresIn: "1h" }
		);

		(await cookies()).set("token", token, {
			httpOnly: true,
			secure: ENV("NODE_ENV") == "production",
			path: "/",
			sameSite: true
		})

		return {
			success: true,
			message: "Registration successful"
		}

	} catch (error) {
		return {
			success: false,
			error,
		}
	}
}