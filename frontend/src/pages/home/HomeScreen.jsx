import React from "react";
import { useAuthStore } from "../../store/authUser";
import Navbar from "../../components/Navbar";

const HomeScreen = () => {
	return (
		<>
			<div className="relative h-screen text-white bg-black">
				<Navbar />
			</div>
		</>
	);
};

export default HomeScreen;
