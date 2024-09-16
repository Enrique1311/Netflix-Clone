import React from "react";
import { Link } from "react-router-dom";

const MainButton = ({ children, to }) => {
	return (
		<div>
			<Link
				to={to}
				className="main-button"
			>
				{children}
			</Link>
		</div>
	);
};

export default MainButton;
