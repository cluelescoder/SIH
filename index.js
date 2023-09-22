const express=require("express");
const { mongo, default: mongoose } = require("mongoose");
const app=express();
// const userRouter=require("./routes/userRoute")
const authRoute=require("./routes/auth");
MONGO_URL="mongodb+srv://swaroopkammath2001:TQGRRo4ZpZYXaJaP@cluster0.ogkxbvx.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(MONGO_URL).then(()=>{
    console.log("success");
}).catch((err)=>{
    console.log(err);
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api/user",userRouter);
app.use("/api/auth",authRoute);

app.listen(4000,()=>{
    console.log("Backend server is running")
})
