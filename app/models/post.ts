import { model, models, Schema } from "mongoose";

interface IPost {
	title: string
	more: string
	time: string
}

const postSchema = new Schema<IPost>({
	title: String,
	more: String,
	time: {
		type: Date,
		default: Date.now()
	}
})

export const PostModel = models.Post || model<IPost>('Post', postSchema);