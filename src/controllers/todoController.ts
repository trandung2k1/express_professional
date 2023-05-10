import { Request, Response } from 'express';
import Todo from '../models/todo';
const todoController = {
    getAllTodo: async (req: Request, res: Response) => {
        try {
            const data = await Todo.find({});
            return res.status(200).json(data);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({
                    message: error.message,
                });
            }
        }
    },
    createTodo: async (req: Request, res: Response) => {
        const { title, body } = req.body;
        if (!title || !body) {
            return res.status(400).json({
                message: 'Title and body is required',
            });
        }
        try {
            const findTodo = await Todo.findOne({ title });
            if (findTodo) {
                return res.status(400).json({
                    message: 'Title already exists',
                });
            }
            const newTodo = new Todo({
                title,
                body,
            });
            const savedTodo = await newTodo.save();
            return res.status(201).json(savedTodo);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({
                    message: error.message,
                });
            }
        }
    },
};
export default todoController;
