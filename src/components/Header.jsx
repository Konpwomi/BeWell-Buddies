import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLoggedIn(true);
      } else {
        null;
      }
    });
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigator("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex px-14 py-8 justify-between items-center w-full border-b border-blue-500 ">
      <Link className="text-center font-semibold text-3xl bg-gradient-to-r from-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text  transition duration-150 hover:scale-105">
        BeWell Buddies
      </Link>
      <div className="flex items-center gap-6">
        <Link
          className="text-[#6C87AE] transition duration-150 hover:scale-105 
          hover:text-blue-600"
          to="/BmiCheck"
        >
          BMI Check
        </Link>

        <Link
          className="text-[#6C87AE] transition duration-150 hover:scale-105 
          hover:text-blue-600"
          to="/CalorieCount"
        >
          Calorie Count
        </Link>
        {isLoggedIn ? (
          <Link
            className="text-[#6C87AE] transition duration-150 hover:scale-105 
          hover:text-blue-600"
            to="/TrackProgress"
          >
            Track Progress
          </Link>
        ) : (
          <div
            className="flex gap-1 justify-center items-center tooltip tooltip-bottom  "
            data-tip="Please login first"
          >
            <p className="text-[#6C87AE]">Track Progress </p>
            <span className="text-blue-500 font-bold text-xl">+</span>
          </div>
        )}

        {isLoggedIn ? (
          <Link
            className="text-[#6C87AE] transition duration-150 hover:scale-105 
          hover:text-blue-600"
            to="/MatchExercises"
          >
            Match Exercises
          </Link>
        ) : (
          <div
            className="flex gap-1 justify-center items-center tooltip tooltip-bottom  "
            data-tip="Please login first"
          >
            <p className="text-[#6C87AE]">Match Exercises</p>
            <span className="text-blue-500 font-bold text-xl">+</span>
          </div>
        )}
        {isLoggedIn ? (
          <Link
            className="text-[#6C87AE] transition duration-150 hover:scale-105 
          hover:text-blue-600"
            to="/MealIdeas"
          >
            Meal Ideas
          </Link>
        ) : (
          <div
            className="flex gap-1 justify-center items-center tooltip tooltip-bottom  "
            data-tip="Please login first"
          >
            <p className="text-[#6C87AE]">Meal Ideas</p>
            <span className="text-blue-500 font-bold text-xl">+</span>
          </div>
        )}

        {/* <Link
          to="/login"
          className="px-4 py-2 ml-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg text-white
          transition duration-150 hover:scale-105  hover:from-blue-600 hover:to-indigo-600"
        >
          Login
        </Link> */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 ml-4 bg-gradient-to-r from-red-500 to-indigo-500 rounded-lg text-white
          transition duration-150 hover:scale-105  hover:from-red-600 hover:to-indigo-600"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 ml-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg text-white
          transition duration-150 hover:scale-105  hover:from-blue-600 hover:to-indigo-600"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
