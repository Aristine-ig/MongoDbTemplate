import mongoose from "mongoose";



export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://waylord07:RajSingh92005.1@cluster0.rwyxb2i.mongodb.net/RESUME')
    .then(() => console.log('DB CONNECTED'))
    
}