import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainButton from "../components/MainBtn";
import { useAuthStore } from "../store/authUser";

const SignUpPage = () => {
	const { searchParams } = new URL(document.location),
		emailValue = searchParams.get("email");

	const [email, setEmail] = useState(emailValue || ""),
		[username, setUsername] = useState(""),
		[password, setPassword] = useState("");

	const { signup } = useAuthStore();

	const handleSignUp = (e) => {
		e.preventDefault();
		signup({ email, username, password });
	};

	return (
		<div className="hero-bg w-full h-screen">
			<header className="header-container">
				<Link to={"/"}>
					<img
						src="/netflix-logo.png"
						alt="logo"
						className="w-52"
					/>
				</Link>{" "}
			</header>{" "}
			<div className="flex justify-center items-center mt-20 mx-3">
				<div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
					<h1 className="text-center text-white text-2xl font-bold mb-4">
						Sign Up
					</h1>
					<form
						className="space-y-4"
						onSubmit={handleSignUp}
					>
						<div>
							<label
								htmlFor="email"
								className="text-sm font-medium text-gray-400 block"
							>
								Email
							</label>
							<input
								type="email"
								className="w-full px-3 py-2 border border-gray-600 rounded-md bg-transparent text-white focus:outline-none focus:ring"
								placeholder="you@example.com"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>{" "}
						</div>{" "}
						<div>
							<label
								htmlFor="username"
								className="text-sm font-medium text-gray-400 block"
							>
								Username
							</label>
							<input
								type="text"
								className="w-full px-3 py-2 border border-gray-600 rounded-md bg-transparent text-white focus:outline-none focus:ring"
								placeholder="Your name"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="text-sm font-medium text-gray-400 block"
							>
								Password
							</label>
							<input
								type="password"
								className="w-full px-3 py-2 border border-gray-600 rounded-md bg-transparent text-white focus:outline-none focus:ring"
								placeholder="●●●●●●●●"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<MainButton>Sign Up</MainButton>
					</form>
					<div className="text-center text-gray-400">
						Already a member?
						<Link
							to={"/login"}
							className="text-red-500 ml-2 hover:underline"
						>
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
