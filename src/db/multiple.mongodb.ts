import mongoose from 'mongoose';
function newConnection(uri: string): mongoose.Connection {
    const db = mongoose.createConnection(uri);
    db.on('error', function (this: any, error: Error) {
        console.log(error);
        db.close().catch(() => {
            console.log(`Close connection ${this.name}`);
        });
    });
    db.on('connected', function (this: any) {
        mongoose.set('debug', function (col, method, query, doc) {
            console.log(col, method, query, doc);
        });
        console.log(`Mongoose connected ${this.name}`);
    });
    db.on('disconnected', function (this: any, error: Error) {
        console.log('Mongoose disconnected' + this.name + error.message);
    });
    return db;
}
export const postsDB = newConnection(process.env.POSTS_URI!);
export const postsTestDB = newConnection(process.env.POSTS_DEVELOPMENT_URI!);
