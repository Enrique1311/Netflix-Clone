import React from "react";
import { useState } from "react";
import MainButton from "../../components/MainBtn";
import MainLinkBtn from "../../components/MainLinkBtn";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AuthScreen = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate("/signup?email=" + email);
	};

	return (
		<div className="hero-bg relative">
			<header className="header-container">
				<img
					src="/netflix-logo.png"
					alt="logo"
					className="w-32 md:w-52"
				/>
				<MainLinkBtn to={"/login"}>Sign In</MainLinkBtn>
			</header>

			{/* Hero section *******************************************/}
			<section className="section-padding-x flex flex-col justify-center items-center py-40 text-center text-white max-w-6xl mx-auto">
				<h1 className="text-4xl font-bold mb-4 md:text-6xl">
					Unlimited movies, TV shows and more
				</h1>
				<p className="text-lg mb-4">Watch anywhere. Cancel anytime.</p>
				<p className="mb-4">
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				<form
					className="flex flex-col gap-4 w-1/2 md:flex-row"
					onSubmit={handleFormSubmit}
				>
					<input
						type="email"
						placeholder="Email address"
						value={email}
						className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<MainButton>
						Get Started
						<ChevronRight />
					</MainButton>
				</form>
			</section>

			<div
				className="h-2 w-full bg-[#232323]"
				aria-hidden="true"
			></div>

			{/* Enjoy section *******************************************/}
			<section className="section-padding-x py-10 bg-black text-white">
				<div className="flex max-w-6xl mx-auto justify-center items-center flex-col p-4 md:flex-row md:p-2">
					{/* Left item ***************************/}
					<div className="flex-1 text-center md:text-left">
						<h2 className="text-4xl font-extrabold mb-4 md:text-5xl">
							Enjoy on your TV.
						</h2>
						<p className="text-lg md:text-xl">
							Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
							Blue-ray players and more.
						</p>
					</div>
					{/* Right item ***************************/}
					<div className="flex-1 relative">
						<img
							src="/tv.png"
							alt="TV image"
							className="relative z-20"
						/>
						<video
							className="absolute top-[-.5rem] left-1/2 -translate-x-1/2 translate-y-1/2 h-1/2 z-10"
							playsInline
							autoPlay={true}
							muted
							loop
						>
							<source
								src="/hero-vid.m4v"
								type="video/mp4"
							/>
						</video>
					</div>
				</div>
			</section>

			<div
				className="h-2 w-full bg-[#232323]"
				aria-hidden="true"
			></div>

			{/* Download section *******************************************/}
			<section className="section-padding-x py-10 bg-black text-white">
				<div className="flex max-w-6xl mx-auto justify-center items-center flex-col p-4 md:flex-row-reverse md:p-2">
					{/* Left Item *****************/}
					<div className="flex-1 text-center md:text-left">
						<h2 className="text-4xl font-extrabold mb-4 text-balance md:text-5xl">
							Download your shows to watch offline
						</h2>
						<p className="text-lg md:text-xl">
							Save your favorites easily and always have something to watch.
						</p>
					</div>
					{/* Right Item *****************/}
					<div className="flex-1 mb-20">
						<div className="relative">
							<img
								src="/stranger-things-lg.png"
								alt="Stranger Things image"
							/>
							<div className="flex items-center gap-2 absolute bottom-[-3rem] left-1/2 -translate-x-1/2 bg-black w-5/6 h-24 border border-slate-500 rounded-md px-2 sm:w-3/4 md:w-4/6">
								<img
									src="/stranger-things-sm.png"
									alt="image"
									className="h-full py-1"
								/>
								<div className="flex justify-between items-center w-full">
									<div className="flex flex-col gap-1">
										<span className="text-sm md:text-md lg:text-lg font-bold">
											Stranger Things
										</span>
										<span className="text-xs md:text-sm text-blue-500">
											Downloading...
										</span>
									</div>
									<img
										src="/download-icon.gif"
										alt="Downloading"
										className="h-8 md:h-12"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div
				className="h-2 w-full bg-[#232323]"
				aria-hidden="true"
			></div>

			{/* Anywhere section *******************************************/}
			<section className="section-padding-x py-10 bg-black text-white">
				<div className="flex max-w-6xl mx-auto justify-center items-center flex-col p-4 md:flex-row md:p-2">
					{/* Left item ***************************/}
					<div className="flex-1 text-center md:text-left">
						<h2 className="text-4xl font-extrabold mb-4 md:text-5xl">
							Watch everywhere.
						</h2>
						<p className="text-lg md:text-xl">
							Stream unlimited movies and TV shows on your phone, tablet,
							laptop, and TV.
						</p>
					</div>
					{/* Right item ***************************/}
					<div className="flex-1 relative overflow-hidden">
						<img
							src="/device-pile.png"
							alt="Device Image"
							className="relative z-20"
						/>
						<video
							className="absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%]"
							playsInline
							autoPlay={true}
							muted
							loop
						>
							<source
								src="/video-devices.m4v"
								type="video/mp4"
							/>
						</video>
					</div>
				</div>
			</section>

			<div
				className="h-2 w-full bg-[#232323]"
				aria-hidden="true"
			></div>

			{/* Kids section *******************************************/}
			<section className="section-padding-x py-10 bg-black text-white">
				<div className="flex max-w-6xl mx-auto justify-center items-center flex-col p-4 md:flex-row-reverse md:p-2">
					{/* Left Item *****************/}
					<div className="flex-1 text-center md:text-left">
						<h2 className="text-4xl md:text-5xl font-extrabold mb-4">
							Create profiles for kids
						</h2>
						<p className="text-lg md:text-xl">
							Send kids on adventures with their favorite characters in a space
							made just for them—free with your membership.
						</p>
					</div>
					{/* Right item ***************************/}
					<div className="flex-1 relative">
						<img
							src="/kids.png"
							alt="Enjoy on your TV"
							className="mt-4"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AuthScreen;
