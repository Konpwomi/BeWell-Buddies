import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Quiz = () => {
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
    answer7: "",
    answer8: "",
    answer9: "",
    answer10: "",
  });
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const navigator = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const uid = user.uid;
      } else {
        navigator("/");
      }
    });
  }, []);

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the score
    let newScore = 0;

    if (answers.answer1.toLowerCase() === "exercise") newScore += 1;
    if (answers.answer2.toLowerCase() === "vegetables") newScore += 1;
    if (answers.answer3.toLowerCase() === "8 hours") newScore += 1;
    if (answers.answer4.toLowerCase() === "stress") newScore += 1;
    if (answers.answer5.toLowerCase() === "balanced diet") newScore += 1;
    if (answers.answer6.toLowerCase() === "vitamin c") newScore += 1;
    if (answers.answer7.toLowerCase() === "cardio") newScore += 1;
    if (answers.answer8.toLowerCase() === "water") newScore += 1;
    if (answers.answer9.toLowerCase() === "meditation") newScore += 1;
    if (answers.answer10.toLowerCase() === "balanced lifestyle") newScore += 1;

    setScore(newScore);
    setShowResult(true);
  };

  return (
    <div className="flex flex-col items-center bg-[#F2F7FF] ">
      <div className="flex flex-col gap-2 fade border-b-2 pt-11 mb-10 w-[800px] border-blue-500">
        <div className="flex">
          <p className="font-bold text-lg">
          Test Your Health Smarts!
          </p>
        </div>
        <h3 className="pb-2">
        Ready to challenge yourself? This health quiz covers a wide range of topics to assess your understanding of healthy living. Get immediate results and see which areas you excel in and where you might have room for improvement.
        </h3>
      </div>
      <h1 className="text-2xl font-bold my-4">Health Quiz</h1>

      <form className="my-10 " onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg mb-2">
            1. What is the most important factor for maintaining good health?
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="exercise"
              name="answer1"
              value="exercise"
              onChange={handleAnswerChange}
            />
            <label htmlFor="exercise" className="ml-2">
              Exercise
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="diet"
              name="answer1"
              value="diet"
              onChange={handleAnswerChange}
            />
            <label htmlFor="diet" className="ml-2">
              Diet
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="sleep"
              name="answer1"
              value="sleep"
              onChange={handleAnswerChange}
            />
            <label htmlFor="sleep" className="ml-2">
              Sleep
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">
            2. Which food group should make up the majority of your diet?
          </label>
          <select
            name="answer2"
            className="p-2 border rounded"
            onChange={handleAnswerChange}
          >
            <option value="">Select an answer</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="meat">Meat</option>
            <option value="grains">Grains</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">
            3. How many hours of sleep are recommended for adults?
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="6hours"
              name="answer3"
              value="6 hours"
              onChange={handleAnswerChange}
            />
            <label htmlFor="6hours" className="ml-2">
              5 hours
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="7-8hours"
              name="answer3"
              value="7-8 hours"
              onChange={handleAnswerChange}
            />
            <label htmlFor="7-8hours" className="ml-2">
              8 hours
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="9hours"
              name="answer3"
              value="9 hours"
              onChange={handleAnswerChange}
            />
            <label htmlFor="9hours" className="ml-2">
              12 hours
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">
            4. Which factor can negatively impact your health?
          </label>
          <select
            name="answer4"
            className="p-2 border rounded"
            onChange={handleAnswerChange}
          >
            <option value="">Select an answer</option>
            <option value="exercise">Lack of exercise</option>
            <option value="stress">Stress</option>
            <option value="meditation">Lack of meditation</option>
            <option value="vitamins">Lack of vitamins</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">
            5. What should your meals consist of for good health?
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="balanceddiet"
              name="answer5"
              value="balanced diet"
              onChange={handleAnswerChange}
            />
            <label htmlFor="balanceddiet" className="ml-2">
              Balanced Diet
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="fastfood"
              name="answer5"
              value="fast food"
              onChange={handleAnswerChange}
            />
            <label htmlFor="fastfood" className="ml-2">
              Fast Food
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="junkfood"
              name="answer5"
              value="junk food"
              onChange={handleAnswerChange}
            />
            <label htmlFor="junkfood" className="ml-2">
              Junk Food
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">
            6. Which vitamin is essential for the immune system?
          </label>
          <select
            name="answer6"
            className="p-2 border rounded"
            onChange={handleAnswerChange}
          >
            <option value="">Select an answer</option>
            <option value="vitamin a">Vitamin A</option>
            <option value="vitamin c">Vitamin C</option>
            <option value="vitamin d">Vitamin D</option>
            <option value="vitamin e">Vitamin E</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">
            7. Which type of exercise improves heart health?
          </label>
          <select
            name="answer7"
            className="p-2 border rounded"
            onChange={handleAnswerChange}
          >
            <option value="">Select an answer</option>
            <option value="strength training">Strength training</option>
            <option value="cardio">Cardio</option>
            <option value="yoga">Yoga</option>
            <option value="pilates">Pilates</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">
            8. What is the best drink for hydration?
          </label>
          <select
            name="answer8"
            className="p-2 border rounded"
            onChange={handleAnswerChange}
          >
            <option value="">Select an answer</option>
            <option value="soda">Soda</option>
            <option value="water">Water</option>
            <option value="juice">Juice</option>
            <option value="coffee">Coffee</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">
            9. What practice can help reduce stress?
          </label>
          <input
            type="text"
            name="answer9"
            className="p-2 border rounded"
            onChange={handleAnswerChange}
            placeholder="Your answer"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">
            10. What is essential for a healthy lifestyle?
          </label>
          <input
            type="text"
            name="answer10"
            className="p-2 border rounded"
            onChange={handleAnswerChange}
            placeholder="Your answer"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white my-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white
          transition duration-150 hover:scale-105  hover:from-blue-600 hover:to-indigo-600"
        >
          Submit
        </button>
      </form>

      {showResult && (
        <div className="flex items-start justify-center mb-14">
          <div className="flex items-center gap-4 border-2 px-24 py-6  mt-3 rounded-lg border-blue-600 bg-white">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text">Result:</h2>
            <p className="text-lg">You scored {score} out of 10!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
