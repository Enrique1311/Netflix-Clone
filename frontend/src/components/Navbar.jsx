import { Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const toggleMobileMenu = () => {
		setOpenMobileMenu(!openMobileMenu);
	};

	return (
		<header className="header-container">
			<div className="flex justify-center items-center gap-10 z-50">
				<Link to={"/"}>
					<img
						src="/netflix-logo.png"
						alt="Netflix logo"
						className="w-32 sm:w-40"
					/>
				</Link>

				{/* Desktop nabvar *******************************/}
				<div className="hidden gap-8 items-center sm:flex">
					<Link
						to={"/"}
						className="hover:underline"
					>
						Movies
					</Link>
					<Link
						to={"/"}
						className="hover:underline"
					>
						Series
					</Link>
					<Link
						to={"/history"}
						className="hover:underline"
					>
						Search History
					</Link>
				</div>
				<div className="flex gap-4 items-center z-50">
					<Link to={"/history"}>
						<Search className="size-6 cursor-pointer" />{" "}
					</Link>
				</div>

				{/* Mobile nabvar *******************************/}

				{openMobileMenu && (
					<div className="w-full mt-4 z-50 bg-black border border-gray-800 rounded sm:hidden">
						<Link
							to={"/"}
							className="block p-2 hover:underline"
							onClick={toggleMobileMenu}
						>
							Movies
						</Link>
						<Link
							to={"/"}
							className="block p-2 hover:underline"
						>
							Series
						</Link>
						<Link
							to={"/history"}
							className="block p-2 hover:underline"
						>
							Search History
						</Link>
					</div>
				)}
			</div>
		</header>
	);
};

export default Navbar;
