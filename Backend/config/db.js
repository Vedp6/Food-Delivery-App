import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vedpatil:ved123@cluster0.vyg8fsd.mongodb.net/food-del').then(()=>console.log("DB connected")
    )
}