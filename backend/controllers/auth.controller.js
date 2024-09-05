import { User } from "../models/user.model.js";

export async function signup(req, res) {
	try {
		const { email, password, username } = req.body;

		if (!email || !password || !username) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required!" });
		}

		const emailRegex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

		const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

		const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

		const newUser = new User({
			email,
			password,
			username,
			image,
		});

		await newUser.save();
	} catch (err) {
		console.error("Error at signup controller!", err.message);
		console.error(err);
		res.status(500).json({ success: false, message: "Internal Server Error!" });
	}
}

export async function login(req, res) {
	res.send("Login route");
}

export async function logout(req, res) {
	res.send("Logout route");
}
