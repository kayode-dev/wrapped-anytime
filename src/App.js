import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home";
import Review from "./components/review";
import BUG from "./components/bug";

function App() {
	return (
		<main className="overflow-y-auto">
			<img
				src={require("./assets/bg-mobile.png")}
				alt=""
				className="h-screen w-screen object-cover md:hidden relative"
			/>
			<div className="fixed top-0 left-0 z-20 w-screen h-screen overflow-y-auto">
				<BrowserRouter>
					<Routes>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path="callback"
							element={<Review />}
						/>
						<Route
							path="beforeyougo"
							element={<BUG />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</main>
	);
}

export default App;
