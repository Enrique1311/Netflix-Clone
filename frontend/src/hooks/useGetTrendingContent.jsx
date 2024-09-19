import React, { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useGetTrendingContent = () => {
	const [trendingContent, setTrendingContent] = useState(null);
	const { contentType } = useContentStore();

	useEffect(() => {
		const getTrendingContent = async () => {
			const res = await axios.get(`/api/v1/${contentType}/trending`);
			setTrendingContent(res.data.content);
		};
		getTrendingContent();
	}, [contentType]);

	return { trendingContent };
};

export default useGetTrendingContent;

// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/movies", protectRoute, moviesRoutes);
// app.use("/api/v1/series", protectRoute, seriesRoutes);
// app.use("/api/v1/search", protectRoute, searchRoutes);
