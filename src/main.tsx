import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import Root from "./routes/Root.js";
import Country, { loader as countryLoader } from "./routes/Country";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <NotFound />,
	},
	{
		path: "country/:countryCode",
		element: <Country />,
		errorElement: <NotFound />,
		loader: countryLoader as any,
	},
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Navbar />
		<RouterProvider router={router} />
	</React.StrictMode>
);
