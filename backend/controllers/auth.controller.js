import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { genTokenAndSetCookie } from "../utils/generateToken.js";

export async function signup(req, res) {
	try {
		const { email, password, username } = req.body;

		if (!email || !password || !username) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required!" });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			return res
				.status(400)
				.json({ success: false, message: "Invalid email address!" });
		}

		if (password.length < 6 || password.length > 12) {
			return res.status(400).json({
				success: false,
				message: "The password must be between 6 and 12 characters!",
			});
		}

		const existingEmail = await User.findOne({ email: email });

		if (existingEmail) {
			return res.status(400).json({
				success: false,
				message: "This email address is already used by a client!",
			});
		}

		const existingUsername = await User.findOne({ username: username });

		if (existingUsername) {
			return res.status(400).json({
				success: false,
				message: "This username is already used by a client!",
			});
		}

		let hashedPassword = await bcryptjs.hash(password, 10);

		const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

		const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

		const newUser = new User({
			email,
			password: hashedPassword,
			username,
			image,
		});

		genTokenAndSetCookie(newUser._id, res);
		await newUser.save();

		// Remove password from the response
		res
			.status(201)
			.json({ success: true, user: { ...newUser._doc, password: "" } });
	} catch (err) {
		console.error("Error at signup controller!", err.message);
		res.status(500).json({ success: false, message: "Internal Server Error!" });
	}
}

export async function login(req, res) {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required!" });
		}

		const user = await User.findOne({ email: email });

		if (!user) {
			return res
				.status(404)
				.json({ success: false, message: "Invalid email or password!" });
		}

		const isPasswordCorrect = await bcryptjs.compare(password, user.password);

		if (!isPasswordCorrect) {
			return res
				.status(400)
				.json({ success: false, message: "Invalid email or password!" });
		}

		genTokenAndSetCookie(user._id, res);

		res.status(200).json({
			success: true,
			user: {
				...user._doc,
				password: "",
			},
		});
	} catch (err) {
		console.log("Error in login controller!", err.message);
		res.status(500).json({ success: false, message: "Internal Server Error!" });
	}
}

export async function logout(req, res) {
	try {
		res.clearCookie("jwt-netflix");
		res
			.status(200)
			.json({ success: true, message: "Logged out successfully!" });
	} catch (err) {
		console.log("Error in logout controller: ", err.message);
		res.status(500).json({ success: false, message: "Internal Server Error!" });
	}
}

export async function authCheck(req, res) {
	try {
		res.status(200).json({ success: true, user: req.user });
	} catch (error) {
		console.log("Error in authCheck controller", error.message);
		res.status(500).json({ success: false, message: "Internal server error!" });
	}
}
