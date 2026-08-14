import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection 
await connectDB()

app.use(express.json({ limit: '10mb' }))
app.use(cors())

app.get("/", (req, res) => res.send("Server is live..."))

// Health check route for keep-alive cron jobs (e.g., Render ping)
app.get(["/health", "/api/health"], (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "Server is healthy and awake",
        timestamp: new Date().toISOString(),
        uptime: `${Math.floor(process.uptime())}s`
    });
})

app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
})
