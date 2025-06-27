import mongoose from "mongoose";



export const connectDB = async () => {
    await mongoose.connect('Your database key/project name')
    .then(() => console.log('DB CONNECTED'))
    
}
