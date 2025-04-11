import mongoose from "mongoose"

export default async function connectDB() {
    const db=await mongoose.connect("mongodb://localhost:27017/emobile")
    console.log("connected db");
    return db
    
}

