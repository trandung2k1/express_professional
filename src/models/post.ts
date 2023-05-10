import { Schema } from 'mongoose';
import { postsDB } from '../db/multiple.mongodb';
interface IPost {
    title: string;
    body: string;
}
const postSchema = new Schema<IPost>(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Post = postsDB.model<IPost>('Post', postSchema);
export default Post;
