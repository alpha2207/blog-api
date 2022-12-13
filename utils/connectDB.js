import mongoose from 'mongoose';

let connectDB = () => {
    mongoose.connect('mongodb+srv://ayanali:ayanali@blog.wnoxjvb.mongodb.net/?retryWrites=true&w=majority').then((e)=>{
        console.log("connected");
        console.log(e.connection.port);
    }).catch(e=>{
        console.log(e);
    })
}
export default connectDB;
