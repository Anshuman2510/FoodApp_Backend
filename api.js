const express = require("express");
const app = express();
// npm i cookie parser
const cookieParser = require("cookie-parser");
const cors = require("cors");
// jsonwebtoken
// token name is -> JWT & mechanism -> cookies
// repersent -> collection
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const planRouter = require("./routes/planRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const bookingRouter = require("./routes/bookingRoutes")
// to  add post body data to req.body
app.use(express.json());
// add cookies to req.cookies
app.use(cors());
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/plan", planRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/booking",bookingRouter);


// update user Profile
// delete user profile
app.use(function(req,res)
{
    res.send("<h1>Backend API</h1>");
})
// locahost:3000 -> express API 
const port=process.env.PORT || 3000;
app.listen(port, function () {
    console.log("server started at port 3000");
})
// create -> deleteUser, updateUser
// {
//     name: 'Jasbir',
//     password: 'abcd',
//     confirmPassword: 'abcd',
//     email: 'abc@gmail.com',
//     phonenumber: '8800953687',
//     pic: 'dp.png',
// -> unnique id
//     _id: new ObjectId("62d2f2c0aaa6d2fe55d1e68c"),
// mongoose
//     __v: 0
//   }