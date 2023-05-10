import mongoose from 'mongoose';
import colors from 'colors';
mongoose.set('debug', true);
const connectDB = async (): Promise<void> => {
    try {
        mongoose.set('debug', { color: false, shell: true });
        await mongoose.connect(process.env.MONGODB_URL as string, {});
        console.log(colors.green('Connect MongoDB successfully!!'));
    } catch (error: any) {
        console.log(error);
        console.error(colors.red('Connect MongoDB failed!!'));
        process.exit(1);
    }
};
process.on('SIGINT', async (): Promise<void> => {
    console.log(colors.red('You are performing a server shutdown!'));
    await mongoose.connection.close();
    process.exit(0);
});
export default connectDB;
