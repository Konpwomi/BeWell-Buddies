import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {  signOut } from "firebase/auth";
import {
  setDoc,
  collection,
  getDoc,
  updateDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";
import BmiChart from "./BmiChart";

function TrackProgress() {
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState({});

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

  console.log(userData);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid); // Update user ID on login state change
      } else {
        // Handle case where user is not logged in (optional: redirect to login?)
      }
    });
    return unsubscribe;
  }, []);

  const handleSaveProgress = async () => {
    const userDocRef = doc(db, "userProgress", userId);

    try {
      // Check if document exists first
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const newEntry = {
          weight,
          bmi,
          timestamp: new Date(),
        };

        // Ensure entries is an array (initialize as empty array if not)
        const existingEntries = docSnap.data().entries || [];

        // Append new entry to existing entries array
        await updateDoc(userDocRef, {
          entries: [...existingEntries, newEntry],
        });
      } else {
        // Document doesn't exist, create it with initial data
        const initialData = {
          entries: [], // Empty entries array for future progress data
        };
        await setDoc(userDocRef, initialData);
      }
    } catch (error) {
      console.error("Error saving progress:", error.message);
    }
  };

  const fetchData = () => {
    if (!userId) return;

    const userDocRef = doc(db, "userProgress", userId);

    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        console.log("No progress data found for the user!");
        setUserData({});
      }
    });

    return unsubscribe; // Return the unsubscribe function
  };

  useEffect(() => {
    const unsubscribe = fetchData();

    // Check if unsubscribe is a function before calling it
    if (typeof unsubscribe === "function") {
      return () => {
        unsubscribe();
      };
    }
  }, [userId]);

  const bmiData = userData.entries
    ? userData.entries.map((entry) => entry.weight)
    : [];
    console.log(bmiData)

  return (
    <div className=" flex fade flex-col items-center track-progress bg-[#F2F7FF] p-4 rounded-lg shadow-md">
      <div className="flex flex-col gap-2 fade border-b-2 pt-11 mb-10 w-[800px] border-blue-500">
        <div className="flex">
          <p className="font-bold text-lg">
            Track Your Progress: Daily Weight Log
          </p>
        </div>
        <h3 className="pb-2">
          Take control of your health journey by tracking your weight daily.
          This page allows you to easily record your weight and see trends over
          time. It's a great way to stay motivated and reach your goals!
        </h3>
      </div>
      <div className=" flex gap-14 m-10">
        {" "}
        <BmiChart bmiData={bmiData} />
        {userData.entries ? (
        <div className="overflow-x-auto  border-2 border-blue-500 rounded-xl bg-white w-[300px]">
          <table className="table">
            <thead>
              <tr>
                <th className="text-[13px] text-black">Day</th>
                <th className="text-[13px] text-black">Weight</th>
              </tr>
            </thead>
            <tbody>
              {userData.entries.map((entry, index) => (
                <tr key={entry.day}>
                  <td>{index + 1}</td>
                  <td>{entry.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}
      </div>
      <form className="my-10 flex gap-10" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label
            htmlFor="weight"
            className="block text-sm font-bold mb-2 text-gray-700"
          >
            Your current weight (kg):
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            onClick={handleSaveProgress}
            className="inline-flex items-center mt-2  py-3  px-7 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white
          transition duration-150 hover:scale-105  hover:from-blue-600 hover:to-indigo-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
          >
            Save Progress
          </button>
        </div>
      </form>

    </div>
  );
}

export default TrackProgress;
