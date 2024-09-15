import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PersonajesDetails } from "./views/personajes-details.jsx";
import { PlanetDetails } from "./views/planet-details.jsx";
import { VehiclesDetails } from "./views/vehicles-details.jsx";
import SearchBar from "./component/SearchBar.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<SearchBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personajes-details/:id" element={<PersonajesDetails />} />
						<Route path="/planet-details/:id" element={<PlanetDetails />} />
						<Route path="/vehicles-details/:id" element={<VehiclesDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
