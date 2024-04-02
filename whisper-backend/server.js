import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRouter from "./routes/userRoute.js"
import forgotPasswordRouter from "./routes/forgotPassword.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;
app.use(express.json());
app.use(cors());


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
});

app.use("/user", userRouter)
app.use("/forgotPassword", forgotPasswordRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
