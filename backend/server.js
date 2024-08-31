import express from "express";

import authRoutes from "./routes/auth.route.js";

const app = express();

app.use("/auth", authRoutes);

app.listen(5000, () => {
	console.log("Listening at http://localhost:5000");
});
