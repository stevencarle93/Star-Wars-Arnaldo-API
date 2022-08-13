import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<Link to="/people">
				<span className="navbar-brand mb-0 h1">People</span>
			</Link>
			<Link to="/films">
				<span className="navbar-brand mb-0 h1">Films</span>
			</Link>
			<Link to="/planets">
				<span className="navbar-brand mb-0 h1">Planets</span>
			</Link>
			<Link to="/species">
				<span className="navbar-brand mb-0 h1">Species</span>
			</Link>
			<Link to="/vehicles">
				<span className="navbar-brand mb-0 h1">Vehicles</span>
			</Link>
			<Link to="/starships">
				<span className="navbar-brand mb-0 h1">Starships</span>
			</Link>
		</nav>
	);
};
