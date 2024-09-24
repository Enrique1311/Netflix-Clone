import express from "express";
import {
	getSearchHistory,
	removeItemFromSearchHitory,
	searchMovie,
	searchPerson,
	searchSeries,
} from "../controllers/search.controller.js";

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/series/:query", searchSeries);

router.get("/search", getSearchHistory);

router.delete("/history/:id", removeItemFromSearchHitory);

export default router;
