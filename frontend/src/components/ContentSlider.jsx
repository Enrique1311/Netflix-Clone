import React, { useRef, useState } from "react";
import { useContentStore } from "../store/content";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SMALL_IMG_BASE_URL } from "../utils/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ContentSlider = ({ category }) => {
	const { contentType } = useContentStore();
	const [content, setContent] = useState([]);
	const [showArrows, setShowArrows] = useState(false);

	const sliderRef = useRef(null);

	useEffect(() => {
		const getContent = async () => {
			const res = await axios.get(`/api/v1/${contentType}/${category}`);
			setContent(res.data.content);
		};
		getContent();
	}, [contentType, category]);

	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				left: -sliderRef.current.offsetWidth,
				brehavior: "smooth",
			});
		}
	};

	const scrollRight = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				left: +sliderRef.current.offsetWidth,
				brehavior: "smooth",
			});
		}
	};

	return (
		<div
			className="relative bg-black text-white px-5 md:px-20"
			onMouseEnter={() => {
				setShowArrows(true);
			}}
			onMouseLeave={() => {
				setShowArrows(false);
			}}
		>
			<h2 className="capitalize mb-2 font-bold text-2xl">
				{category.replaceAll("_", " ")} {contentType}
			</h2>
			<div
				className="flex space-x-4 overflow-x-scroll relative scrollbar-hide"
				ref={sliderRef}
			>
				{content.map((item) => (
					<Link
						to={`/watch/${item.id}`}
						className="relative min-w-[250px] group"
						key={item.id}
					>
						<div className="transition-transform duration-300 ease-in-out rounded-lg overflow-hidden border-[2px] border-gray-500/40 hover:border-white">
							<img
								src={SMALL_IMG_BASE_URL + item.backdrop_path}
								alt="Movie image"
								className="transition-transform duration-300 ease-in-out group-hover:scale-125"
							/>
						</div>
						<p className="mt-1 text-center transition-transform duration-300 ease-in-out group-hover:scale-125">
							{item.title || item.name}
						</p>
					</Link>
				))}
			</div>
			{showArrows && (
				<>
					<button
						className="absolute top-1/2 -translate-y-1/2 left-6 flex justify-center items-center size-10 rounded-full bg-black bg-opacity-50 md:left-24 hover:bg-opacity-75"
						onClick={scrollLeft}
					>
						<ChevronLeft size={24} />
					</button>
					<button
						className="absolute top-1/2 -translate-y-1/2 right-6 flex justify-center items-center size-10 rounded-full bg-black bg-opacity-50 md:right-24 hover:bg-opacity-75"
						onClick={scrollRight}
					>
						<ChevronRight size={24} />
					</button>
				</>
			)}
		</div>
	);
};

export default ContentSlider;
