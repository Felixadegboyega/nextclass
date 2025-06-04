import bcrypt from "bcryptjs";
import { Document, Model, model, models, Schema } from "mongoose";

export interface IUser extends Document {
	firstname: string
	lastname: string
	email: string
	password: string
}

const userSchema = new Schema<IUser>({
	firstname: String,
	lastname: String,
	email: String,
	password: String,
})

userSchema.pre("save", async function () {
	const { password } = this;
	try {
		const salt = await bcrypt.genSalt();
		this.password = await bcrypt.hash(password, salt);
	} catch (error) {
		console.log(error);
	}
})


export const UserModel: Model<IUser> = models.User || model<IUser>('User', userSchema);