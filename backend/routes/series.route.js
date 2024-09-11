import express from "express";

import {
	getSeriesByCategory,
	getSeriesDetails,
	getSeriesTrailers,
	getSimilarSeries,
	getTrendingSeries,
} from "../controllers/series.controller.js";

const router = express.Router();

router.get("/trending", getTrendingSeries);
router.get("/:id/trailers", getSeriesTrailers);
router.get("/:id/details", getSeriesDetails);
router.get("/:id/similar", getSimilarSeries);
router.get("/:category", getSeriesByCategory);

export default router;
