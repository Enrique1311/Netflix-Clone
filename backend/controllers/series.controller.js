import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingSeries(req, res) {
	try {
		const data = await fetchFromTMDB(
			"https://api.themoviedb.org/3/trending/tv/day?language=en-US"
		);
		const randomSeries =
			data.results[Math.floor(Math.random() * data.results?.length)];

		res.json({ success: true, content: randomSeries });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error!" });
	}
}

export async function getSeriesTrailers(req, res) {
	try {
		const { id } = req.params;
		const data = await fetchFromTMDB(
			`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
		);
		res.json({ success: true, trailer: data.results });
	} catch (error) {
		if (error.message.includes("404")) {
			return res.status(404).send(null);
		}

		res.status(500).json({
			success: false,
			message: "Internal Server Error!",
		});
	}
}

export async function getSeriesDetails(req, res) {
	try {
		const { id } = req.params;
		const data = await fetchFromTMDB(
			`https://api.themoviedb.org/3/tv/${id}?language=en-US`
		);
		res.status(200).json({ success: true, content: data });
	} catch {
		if (err.message.includes("404")) {
			return res.status(404).send(null);
		}
		res.status(500).json({ success: false, message: "Internal Server Error!" });
	}
}

export async function getSimilarSeries(req, res) {
	try {
		const { id } = req.params;
		const data = await fetchFromTMDB(
			`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`
		);
		res.status(200).json({ success: true, similar: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error!" });
	}
}

export async function getSeriesByCategory(req, res) {
	try {
		const { category } = req.params;
		const data = await fetchFromTMDB(
			`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`
		);
		res.status(200).json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error!" });
	}
}
