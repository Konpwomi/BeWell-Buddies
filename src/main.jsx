import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TrackProgress from "./pages/TrackProgress";
import CalorieCount from "./pages/CalorieCount";
import BmiCheck from "./pages/BmiCheck";
import MatchExercises from "./pages/MatchExercises";
import MealIdea from "./pages/MealIdea";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/Register", element: <Register /> },
      { path: "/TrackProgress", element: <TrackProgress /> },
      { path: "/CalorieCount", element: <CalorieCount /> },
      { path: "/BmiCheck", element: <BmiCheck /> },
      { path: "/MatchExercises", element: <MatchExercises /> },
      { path: "/MealIdeas", element: <MealIdea /> },
      { path: "*", element: <Home /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
