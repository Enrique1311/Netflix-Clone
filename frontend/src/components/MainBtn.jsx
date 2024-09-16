import React from "react";

const MainButton = ({ children, onClick, onChange }) => {
	return (
		<div>
			<button
				className="main-button"
				onClick={onClick}
				onChange={onChange}
			>
				{children}
			</button>
		</div>
	);
};

export default MainButton;
