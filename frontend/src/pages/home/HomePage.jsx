import React from "react";
import HomeScreen from "./HomeScreen";
import AuthScreen from "./AuthScreen";

const user = 0;

const HomePage = () => {
	return <div>{user ? <HomeScreen /> : <AuthScreen />}</div>;
};

export default HomePage;
