import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connect = async()=> {
    mongoose.set("strictQuery", true); // Set strictQuery to true
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "next-auth-app",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // Check if the connection is successful
        console.log("MongoDB connected successfully");
        isConnected = true; // Update the connection status

    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}