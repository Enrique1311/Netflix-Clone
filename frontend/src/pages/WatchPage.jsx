import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContentStore } from "../store/content";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPlayer from "react-player";

const WatchPage = () => {
	const { id } = useParams();
	const [trailers, setTrailers] = useState([]);
	const [currentTrailerIdX, setCurrentTrailerIdX] = useState(0);
	const [loading, setLoading] = useState(true);
	const [content, setContent] = useState({});
	const [similarContent, setSimilarContent] = useState([]);
	const { contentType } = useContentStore();

	useEffect(() => {
		const getTrailers = async () => {
			try {
				const res = await axios.get(`/api/v1/${contentType}/${id}/trailers`);
				console.log(res);
				setTrailers(res.data.trailer);
			} catch (error) {
				if (error.message.includes("404")) {
					setTrailers([]);
				}
			}
		};

		getTrailers();
	}, [contentType, id]);

	useEffect(() => {
		const getSimilarContent = async () => {
			try {
				const res = await axios.get(`/api/v1/${contentType}/${id}/similar`);
				console.log(res);
				setSimilarContent(res.data.similar);
			} catch (error) {
				if (error.message.includes("404")) {
					setSimilarContent([]);
				}
			}
		};
		getSimilarContent();
	}, [contentType, id]);

	useEffect(() => {
		const getContentDetails = async () => {
			try {
				const res = await axios.get(`/api/v1/${contentType}/${id}`);
				console.log(res);

				setContent(res.data.content);
			} catch (error) {
				if (error.message.includes("404")) {
					setContent(null);
				}
			} finally {
				setLoading(false);
			}
		};
		getContentDetails();
	}, [contentType, id]);

	const handlePrev = () => {
		if (currentTrailerIdX) setCurrentTrailerIdX(currentTrailerIdX - 1);
	};

	const handleNext = () => {
		if (currentTrailerIdX < trailers.length - 1)
			setCurrentTrailerIdX(currentTrailerIdX + 1);
	};

	return (
		<div className="bg-black text-white min-h-screen">
			<div className="mx-auto container px-4 h-full">
				<Navbar />
				{trailers.length > 0 && (
					<div className="flex justify-between items-center mb-4">
						<button
							className={`bg-gray-500/70 text-white py-2 px-4 rounded hover:bg-gray-500 ${
								currentTrailerIdX === 0 ? "opacity-50 cursor-not-allowed" : ""
							}`}
							disabled={currentTrailerIdX === 0}
							onClick={handlePrev}
						>
							<ChevronLeft size={24} />
						</button>
						<button
							className={`bg-gray-500/70 text-white py-2 px-4 rounded hover:bg-gray-500 ${
								currentTrailerIdX === trailers.length - 1
									? "opacity-50 cursor-not-allowed"
									: ""
							}`}
							disabled={currentTrailerIdX === trailers.length - 1}
							onClick={handleNext}
						>
							<ChevronRight size={24} />
						</button>
					</div>
				)}
				<div className="aspect-video mb-8 sm:px-10 md:px-32">
					{trailers.length > 0 && <ReactPlayer />}
				</div>
			</div>
		</div>
	);
};

export default WatchPage;
