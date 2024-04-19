/* eslint-disable react/no-unescaped-entities */
import FoodData from "../assets/foodData.json";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
function MealIdea() {
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

  return (
    <div className="flex flex-col bg-[#F2F7FF] fade justify-center items-center">
      <div className="flex flex-col gap-4 my-6 w-[1400px] pt-14 pb-2 border-b-2 border-blue-500">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#0963db"
            height="25px"
            width="25px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 59 59"
            className="animate-ping absolute text-blue-500"
          >
            <g>
              <path d="M35.073,20.563c-0.494-0.248-1.096-0.048-1.342,0.445c-0.248,0.493-0.049,1.095,0.445,1.342   c1.008,0.506,1.928,1.171,2.731,1.975c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293   c0.391-0.391,0.391-1.023,0-1.414C37.366,21.954,36.273,21.164,35.073,20.563z" />
              <path d="M30.805,19.308c-3.802-0.411-7.528,0.903-10.228,3.603c-0.391,0.391-0.391,1.023,0,1.414   c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c2.27-2.27,5.406-3.366,8.599-3.028   c0.553,0.053,1.041-0.338,1.102-0.887C31.751,19.86,31.354,19.367,30.805,19.308z" />
              <path d="M57,31.5c0-7.17-2.825-14.058-7.799-19.172c2.948-1.061,4.986-3.271,4.986-5.828c0-3.584-3.995-6.5-8.906-6.5   c-2.18,0-4.273,0.574-5.896,1.616C36.925,3.198,34.403,4,31.894,4H11.375C10.065,4,9,5.065,9,6.375v0.25C9,7.935,10.065,9,11.375,9   H13.7C6.407,14.111,2,22.44,2,31.5C2,46.663,14.337,59,29.5,59c5.568,0,10.893-1.665,15.47-4.792   C45.622,54.713,46.411,55,47.253,55c1.004,0,1.945-0.389,2.652-1.095c1.246-1.247,1.42-3.154,0.541-4.598   C54.675,44.337,57,38.049,57,31.5z M4,31.5C4,22.05,9.168,13.451,17.504,9h14.39c0.941,0,1.884,0.113,2.825,0.337   c1.568,0.374,3.129,1.058,4.667,2.047c0.004,0.003,0.009,0.004,0.013,0.007c0.373,0.239,0.776,0.446,1.193,0.635   c0.055,0.025,0.109,0.051,0.165,0.075c1.322,0.572,2.83,0.886,4.419,0.892c0.036,0,0.07,0.007,0.106,0.007   c0.107,0,0.211-0.009,0.318-0.012c0.132-0.004,0.264-0.006,0.397-0.015c0.305-0.018,0.606-0.047,0.902-0.086   c0.009-0.001,0.018-0.001,0.026-0.002C52.063,17.697,55,24.454,55,31.5c0,5.981-2.086,11.731-5.896,16.307   c-0.822-0.815-2.101-2.083-3-2.969c-0.009-0.009-0.019-0.018-0.028-0.027c-0.123-0.122-0.242-0.238-0.348-0.342   c1.63-2.086,2.8-4.39,3.519-6.787c0.54-1.798,0.826-3.649,0.862-5.5c0.108-5.553-2.034-11.11-6.328-15.257   c-3.832-3.699-8.928-5.736-14.35-5.736c-5.133,0-10.023,1.857-13.771,5.23c-4.266,3.839-6.697,9.101-6.848,14.817   c-0.15,5.72,1.994,11.098,6.039,15.143c3.897,3.898,9.08,6.045,14.593,6.045c3.797,0,7.509-1.039,10.777-3.014   c0.09,0.094,0.189,0.198,0.294,0.308c0.046,0.048,0.096,0.1,0.145,0.151c0.068,0.071,0.138,0.143,0.21,0.219   c0.044,0.046,0.089,0.093,0.135,0.14c0.084,0.087,0.171,0.177,0.259,0.268c0.044,0.045,0.086,0.089,0.13,0.135   c0.706,0.728,1.497,1.537,2.118,2.17C39.347,55.552,34.527,57,29.5,57C15.439,57,4,45.561,4,31.5z M29.449,48.283   c-4.407,0-8.551-1.717-11.667-4.833c-6.433-6.434-6.433-16.901,0-23.335c3.116-3.116,7.26-4.833,11.667-4.833   S38,16.999,41.116,20.115c6.434,6.434,6.434,16.901,0,23.335C38,46.566,33.856,48.283,29.449,48.283z" />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#0963db"
            height="25px"
            width="25px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 59 59"
            className="reletive text-blue-500"
          >
            <g>
              <path d="M35.073,20.563c-0.494-0.248-1.096-0.048-1.342,0.445c-0.248,0.493-0.049,1.095,0.445,1.342   c1.008,0.506,1.928,1.171,2.731,1.975c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293   c0.391-0.391,0.391-1.023,0-1.414C37.366,21.954,36.273,21.164,35.073,20.563z" />
              <path d="M30.805,19.308c-3.802-0.411-7.528,0.903-10.228,3.603c-0.391,0.391-0.391,1.023,0,1.414   c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c2.27-2.27,5.406-3.366,8.599-3.028   c0.553,0.053,1.041-0.338,1.102-0.887C31.751,19.86,31.354,19.367,30.805,19.308z" />
              <path d="M57,31.5c0-7.17-2.825-14.058-7.799-19.172c2.948-1.061,4.986-3.271,4.986-5.828c0-3.584-3.995-6.5-8.906-6.5   c-2.18,0-4.273,0.574-5.896,1.616C36.925,3.198,34.403,4,31.894,4H11.375C10.065,4,9,5.065,9,6.375v0.25C9,7.935,10.065,9,11.375,9   H13.7C6.407,14.111,2,22.44,2,31.5C2,46.663,14.337,59,29.5,59c5.568,0,10.893-1.665,15.47-4.792   C45.622,54.713,46.411,55,47.253,55c1.004,0,1.945-0.389,2.652-1.095c1.246-1.247,1.42-3.154,0.541-4.598   C54.675,44.337,57,38.049,57,31.5z M4,31.5C4,22.05,9.168,13.451,17.504,9h14.39c0.941,0,1.884,0.113,2.825,0.337   c1.568,0.374,3.129,1.058,4.667,2.047c0.004,0.003,0.009,0.004,0.013,0.007c0.373,0.239,0.776,0.446,1.193,0.635   c0.055,0.025,0.109,0.051,0.165,0.075c1.322,0.572,2.83,0.886,4.419,0.892c0.036,0,0.07,0.007,0.106,0.007   c0.107,0,0.211-0.009,0.318-0.012c0.132-0.004,0.264-0.006,0.397-0.015c0.305-0.018,0.606-0.047,0.902-0.086   c0.009-0.001,0.018-0.001,0.026-0.002C52.063,17.697,55,24.454,55,31.5c0,5.981-2.086,11.731-5.896,16.307   c-0.822-0.815-2.101-2.083-3-2.969c-0.009-0.009-0.019-0.018-0.028-0.027c-0.123-0.122-0.242-0.238-0.348-0.342   c1.63-2.086,2.8-4.39,3.519-6.787c0.54-1.798,0.826-3.649,0.862-5.5c0.108-5.553-2.034-11.11-6.328-15.257   c-3.832-3.699-8.928-5.736-14.35-5.736c-5.133,0-10.023,1.857-13.771,5.23c-4.266,3.839-6.697,9.101-6.848,14.817   c-0.15,5.72,1.994,11.098,6.039,15.143c3.897,3.898,9.08,6.045,14.593,6.045c3.797,0,7.509-1.039,10.777-3.014   c0.09,0.094,0.189,0.198,0.294,0.308c0.046,0.048,0.096,0.1,0.145,0.151c0.068,0.071,0.138,0.143,0.21,0.219   c0.044,0.046,0.089,0.093,0.135,0.14c0.084,0.087,0.171,0.177,0.259,0.268c0.044,0.045,0.086,0.089,0.13,0.135   c0.706,0.728,1.497,1.537,2.118,2.17C39.347,55.552,34.527,57,29.5,57C15.439,57,4,45.561,4,31.5z M29.449,48.283   c-4.407,0-8.551-1.717-11.667-4.833c-6.433-6.434-6.433-16.901,0-23.335c3.116-3.116,7.26-4.833,11.667-4.833   S38,16.999,41.116,20.115c6.434,6.434,6.434,16.901,0,23.335C38,46.566,33.856,48.283,29.449,48.283z" />
            </g>
          </svg>
          <p className="font-bold ml-3 text-lg">
            Upgrade Your Plate! : Explore a World of Healthy Foods
          </p>
        </div>
        <h3 className="">
          Discover a world of delicious and nutritious foods! We'll guide you
          through a variety of healthy options, from energizing breakfasts to
          satisfying dinners. Explore recipes, learn about healthy ingredients,
          and find inspiration to create meals that nourish your body and taste
          buds. Get ready to feel your best from the inside out!
        </h3>
      </div>
      <div className="grid grid-cols-3 py-14 px-32 gap-16 justify-items-center ">
        {/* <button
       type="button"
        className="px-4 py-2 ml-4 bg-red-500 rounded-lg"
        onClick={() => signOut(auth)}
      >
        Log Out
      </button> */}

        {FoodData.map((food, index) => (
          <div key={index}>
            <button
              className="border-2 text-start rounded-3xl hover:scale-105 transition duration-300 bg-white hover:border-blue-500 "
              onClick={() =>
                document.getElementById(`my_modal_${index}`).showModal()
              }
            >
              <img
                className="object-cover w-full h-[250px] rounded-t-3xl"
                src={food.image}
              />
              <div className="p-5">
                <h3 className="font-bold mb-3 line-clamp-1">{food.name}</h3>
                <p className="text-sm line-clamp-3 text-[#6C87AE]">
                  {food.description}
                </p>
              </div>
              <dialog
                id={`my_modal_${index}`}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <img
                    className="object-cover w-full h-[250px] rounded-3xl"
                    src={food.image}
                  />
                  <h3 className="font-bold py-4">{food.name}</h3>
                  <p className="text-sm pb-4">{food.description}</p>
                  <p className="pb-4 font-bold border-t-[1px] border-blue-600 pt-[10px]">
                    ingredients
                  </p>
                  <p className="text-sm pb-4">{food.ingredients}</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealIdea;
