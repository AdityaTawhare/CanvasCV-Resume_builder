import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => { console.log("Database connected successfully") })

        let mongodbURI = process.env.MONGODB_URI;
        const projectName = 'Resume-builder';

        if (!mongodbURI) {
            throw new Error("MONGODB_URI environment variable not set")
        }

        if (!mongodbURI.endsWith("/")) {
            mongodbURI += "/"
        }

        await mongoose.connect(`${mongodbURI}${projectName}`)
    } catch (error) {
        console.error("Error connection to MongoDB:", error)
    }
}

export default connectDB;