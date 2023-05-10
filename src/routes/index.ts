import { Express } from 'express';
import post from './post.route';
import todo from './todo.route';
const routes = (app: Express) => {
    app.use('/todo', todo);
    app.use('/posts', post);
};
export default routes;
