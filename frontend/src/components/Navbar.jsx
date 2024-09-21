import { LogOut, Menu, Search, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const Navbar = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const { user, logout } = useAuthStore();

	const toggleMobileMenu = () => {
		setOpenMobileMenu(!openMobileMenu);
	};

	const { setContentType } = useContentStore();

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
						onClick={() => setContentType("movies")}
					>
						Movies
					</Link>
					<Link
						to={"/"}
						className="hover:underline"
						onClick={() => setContentType("series")}
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
			</div>{" "}
			<div className="flex gap-3 items-center z-50">
				<Link to={"/search"}>
					<Search className="size-6 cursor-pointer" />
				</Link>
				<img
					src="/avatar1.png"
					alt="Avatar"
					className="h-8 rounded cursor-pointer"
				/>
				<LogOut
					className="size-6 cursor-pointer"
					onClick={logout}
				/>
				<div className="sm:hidden">
					{!openMobileMenu ? (
						<Menu
							className="size-6 cursor-pointer"
							onClick={toggleMobileMenu}
						/>
					) : (
						<X
							className="size-6 cursor-pointer"
							onClick={toggleMobileMenu}
						/>
					)}
				</div>
			</div>
			{/* Mobile nabvar *******************************/}
			{openMobileMenu && (
				<div className="absolute w-fit top-16 right-1 p-4 z-50 bg-black border border-gray-600 rounded sm:hidden">
					<Link
						to={"/"}
						className="block p-2 hover:underline"
						onClick={() => setContentType("movies")}
					>
						Movies
					</Link>
					<Link
						to={"/"}
						className="block p-2 hover:underline"
						onClick={() => setContentType("series")}
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
		</header>
	);
};

export default Navbar;
