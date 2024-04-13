import mongoose from "mongoose"
try{
    mongoose.connect(process.env.MONGO_URL);
}catch(err){
    console.log(err)
}