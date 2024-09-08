import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
	try {
		const connection = await mongoose.connect(ENV_VARS.MONGO_URI);
		console.log("MongoBD connected: " + connection.connection.host);
	} catch (err) {
		// 0 means error at the connection
		// 1 means success at the connection
		process.exit(1);
		console.error("Error connecting to MongoDB: " + err.message);
	}
};
