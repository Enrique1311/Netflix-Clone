import express from "express";
import authRoutes from "./routes/auth.route.js";
import moviesRoutes from "./routes/movies.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/movie", moviesRoutes);

app.listen(PORT, () => {
	console.log("Listening at http://localhost:" + PORT);
	connectDB();
});
