import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Explanation from "./pages/explanation/Explanation";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{ path: "/explanation", element: <Explanation /> },
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
