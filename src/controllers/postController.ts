import { Request, Response } from 'express';
import Post from '../models/post';
const postController = {
    getAllPost: async (req: Request, res: Response) => {
        try {
            const posts = await Post.find({});
            return res.status(200).json(posts);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({
                    message: error.message,
                });
            }
        }
    },
    getPost: async function (req: Request, res: Response) {
        const { title, body } = req.body;
        try {
            const findPost = await Post.findOne({ title: title, body: body });
            return res.status(200).json(findPost);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({
                    message: error.message,
                });
            }
        }
    },
};

export default postController;
