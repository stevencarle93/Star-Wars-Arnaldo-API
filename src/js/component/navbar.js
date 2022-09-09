import React from "react";
import { Link } from "react-router-dom";
import Favoritos from "./favoritos";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Favoritos />
		</nav>
	);
};
