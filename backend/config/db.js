import mongoose  from "mongoose";

export const connectDb =async()=>{
  await mongoose.connect('mongodb+srv://priyansh:15062002@cluster0.lx0vhcj.mongodb.net/food-del').then(()=>console.log("DB connected"));
}