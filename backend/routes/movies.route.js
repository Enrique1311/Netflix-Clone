import express from "express";
import {
	getMovieDetails,
	getMoviesByCategory,
	getSimilarMovies,
	getTrailersMovie,
	getTrendingMovie,
} from "../controllers/movies.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getTrailersMovie);
router.get("/:id/datails", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);

export default router;
