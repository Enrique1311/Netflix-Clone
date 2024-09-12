import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import moviesRoutes from "./routes/movies.route.js";
import seriesRoutes from "./routes/series.route.js";
import searchRoutes from "./routes/search.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/movies", protectRoute, moviesRoutes);
app.use("/series", protectRoute, seriesRoutes);
app.use("/search", protectRoute, searchRoutes);

app.listen(PORT, () => {
	console.log("Listening at http://localhost:" + PORT);
	connectDB();
});
