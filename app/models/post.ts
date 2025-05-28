import { Document, Model, model, models, Schema } from "mongoose";

export interface IPost extends Document {
	title: string
	more: string
	time: Date
}

const postSchema = new Schema<IPost>({
	title: String,
	more: String,
	time: {
		type: Date,
		default: Date.now()
	}
})

export const PostModel: Model<IPost> = models.Post || model<IPost>('Post', postSchema);