import React from "react";
import { useAuthStore } from "../../store/authUser";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { Info, Play } from "lucide-react";

const HomeScreen = () => {
	return (
		<>
			<div className="relative h-screen text-white">
				<Navbar />
				<img
					src="/extraction.jpg"
					alt="Image"
					className="absolute top-0 right-0 w-full h-full object-cover -z-50"
				/>
				<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
					<div className="absolute bg-gradient-to-b from-black via-black/50 to-black/50 w-full h-full top-0 left-0 -z-10"></div>
					<div className="max-w-2xl">
						<h1 className="text-6xl font-extrabold text-balance mb-2">
							Extraction
						</h1>
						<p className="text-lg mb-4">2014 | 18+</p>
						<p className="text-lg">
							jjkj kjhhjk n,lnkllkh b,bnmbnbm mnvvjmvv bmbmbbmn{" "}
						</p>
					</div>
					<div className="flex mt-8 gap-4">
						<Link
							to="/watch/123"
							className="bg-white text-black font-bold py-2 px-4 rounded flex items-center hover:bg-white/70"
						>
							<Play className="size-6 mr-2 fill-black" />
							Play
						</Link>
						<Link
							to="/watch/123"
							className="bg-gray-500/70 text-white py-2 px-4 rounded flex items-center hover:bg-gray-500"
						>
							<Info className="size-6 mr-2" />
							More info
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeScreen;
