import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { Info, Play } from "lucide-react";
import useGetTrendingContent from "../../hooks/useGetTrendingContent";
import { ORIGINAL_IMG_BASE_URL } from "../../utils/constants";

const HomeScreen = () => {
	const { trendingContent } = useGetTrendingContent();

	if (!trendingContent)
		return (
			<div className="h-screen text-white relative">
				<Navbar />
				<div className="shimmer absolute top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center -z-10"></div>
			</div>
		);

	return (
		<>
			<div className="relative h-screen text-white">
				<Navbar />
				<img
					src={ORIGINAL_IMG_BASE_URL + trendingContent?.backdrop_path}
					alt="Image"
					className="absolute top-0 right-0 w-full h-full object-cover -z-50"
				/>
				<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
					<div className="absolute bg-gradient-to-b from-black via-black/50 to-black/50 w-full h-full top-0 left-0 -z-10"></div>
					<div className="max-w-2xl">
						<h1 className="text-6xl font-extrabold text-balance mb-2">
							{trendingContent?.title || trendingContent?.name}
						</h1>
						<p className="text-lg mb-4">
							{trendingContent?.release_date?.split("-")[0] ||
								trendingContent?.first_air_date?.split("-")[0]}{" "}
							| {trendingContent?.adult ? "+18" : "PG-13"}
						</p>
						<p className="text-lg">
							{trendingContent?.overview.length > 200
								? trendingContent?.overview.slice(0, 200) + "..."
								: trendingContent?.overview}
						</p>
					</div>
					<div className="flex mt-8 gap-4">
						<Link
							to={`/watch/${trendingContent?.id}`}
							className="bg-white text-black font-bold py-2 px-4 rounded flex items-center hover:bg-white/70"
						>
							<Play className="size-6 mr-2 fill-black" />
							Play
						</Link>
						<Link
							to={`/watch/${trendingContent?.id}`}
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
