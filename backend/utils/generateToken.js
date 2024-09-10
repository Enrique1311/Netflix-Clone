import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const genTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

	res.cookie("jwt-netflix", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in ms
		httpOnly: true, // prevent XSS attacks (it´s not accessible by javascript)
		sameSite: "strict", // prevent CSRF attacks
		secure: ENV_VARS.NODE_ENV !== "development", // cookies will only be set in https in production
	});
	return token;
};
