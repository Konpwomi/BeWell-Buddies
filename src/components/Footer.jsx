import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col w-full px-14 py-8 border-t border-blue-500 ">
      <div className="flex w-full justify-between px-20 py-8">
        <div className="flex flex-col basis-1/3">
          <div className="text-[32px] mb-4 font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text ">
            BeWell Buddies
          </div>
          <p className="text-sm">
            Life is a journey, and well-being is the compass that guides us.
            BeWell Buddies helps you navigate the ups and downs, providing
            resources and encouragement to build a balanced and fulfilling life.{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <div className="mb-4 font-semibold text-[20px] bg-gradient-to-r from-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text ">
            Feature
          </div>{" "}
          <Link
            className="text-[#6C87AE] transition duration-150
          hover:text-blue-600"
            to="/BmiCheck"
          >
            BMI Check
          </Link>{" "}
          <Link
            className="text-[#6C87AE] transition duration-150
          hover:text-blue-600"
            to="/CalorieCount"
          >
            Calorie Count
          </Link>
          <Link
            className="text-[#6C87AE] transition duration-150
          hover:text-blue-600"
            to="/TrackProgress"
          >
            Track Progress
          </Link>
          <Link
            className="text-[#6C87AE] transition duration-150
          hover:text-blue-600"
            to="/MatchExercises"
          >
            Match Exercises
          </Link>
          <Link
            className="text-[#6C87AE] transition duration-150
          hover:text-blue-600"
            to="/MealIdeas"
          >
            MealIdeas
          </Link>
        </div>
      </div>
      <div className="flex justify-between border-t-2 border-blue-500 pt-6">
        <div className="font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text">
          Copyright © 2024
        </div>
        <div className="font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text ">
          All Rights Reserved | BeWell Buddies
        </div>
      </div>
    </div>
  );
}

export default Footer;
