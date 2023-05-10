import { Schema } from 'mongoose';
import { postsTestDB } from '../db/multiple.mongodb';
interface ITodo {
    title: string;
    body: string;
}
const todoSchema = new Schema<ITodo>(
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
const Todo = postsTestDB.model('Todo', todoSchema);
export default Todo;
