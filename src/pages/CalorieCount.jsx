import { useState } from "react";
import CountUp from "react-countup";

function CalorieCount() {
  const [age, setAge] = useState(60);
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(160);
  const [sex, setSex] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);

  const calculateBmr = () => {
    let bmrValue;
    if (sex === "male") {
      bmrValue = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    } else {
      bmrValue = 665 + 9.6 * weight + 1.8 * height - 4.7 * age;
    }
    setBmr(bmrValue);
  };

  const calculateTdee = () => {
    const activityFactor = {
      sedentary: 1.2,
      "lightly active": 1.375,
      "moderately active": 1.55,
      "very active": 1.725,
      "extremely active": 1.9,
    };
    setTdee(bmr * activityFactor[activityLevel]);
  };

  return (
    <div className=" flex flex-col bg-[#F2F7FF] items-center w-full">
      <div className="flex flex-col gap-2 fade border-b-2 pt-11 mb-10 w-[800px] border-blue-500">
        <div className="flex">
          <p className="font-bold text-lg">
            Calculate Your BMR & TDEE: Fuel Your Fitness Goals
          </p>
        </div>
        <h3 className="pb-2">
          <span className="font-bold">BMR</span> is the estimated number of
          calories your body burns at rest to maintain basic functions. <br />
          <span className="font-bold">TDEE</span> factors in your activity level
          on top of your BMR, giving a more accurate picture of your daily
          calorie needs.
        </h3>
      </div>
      <div className="flex flex-col bg-white px-28 py-10 rounded-3xl">
        <div className="flex flex-col">
          <div className="flex gap-3  items-center my-5">
            {" "}
            <label className="font-bold" htmlFor="sex">Sex:</label>
            <select
              className="border-2  py-3 pl-6 rounded-xl focus:outline-none focus:bg-white focus:border-blue-500"
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex gap-3 items-center my-5">
            <label className="font-bold" htmlFor="age">Age (years):</label>
            <input
              className="border-2 py-3 pl-6 rounded-xl focus:outline-none focus:bg-white focus:border-blue-500"
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex gap-3 items-center my-5">
            {" "}
            <label className="font-bold" htmlFor="weight">Weight (kg):</label>
            <input
              className="border-2  py-3 pl-6 rounded-xl focus:outline-none focus:bg-white focus:border-blue-500"
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="flex gap-3  items-center my-5">
            {" "}
            <label className="font-bold" htmlFor="height">Height (cm):</label>
            <input
              className="border-2  py-3 pl-6 rounded-xl focus:outline-none focus:bg-white focus:border-blue-500"
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          {/* Display BMR and TDEE values */}
        </div>
        {/* Buttons */}
        <button
          className="py-3 px-10 my-6 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white
          transition duration-150 hover:scale-105  hover:from-blue-600 hover:to-indigo-600"
          onClick={calculateBmr}
        >
          Calculate BMR
        </button>

        <div className="flex items-start justify-center">
          <div className="flex flex-col items-center border-2 px-24 py-6  mb-6 rounded-lg border-blue-600 bg-white">
            <p className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text">
              BMR (kcal)
            </p>
            <CountUp
              className="text-3xl fade font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text"
              decimals={2}
              start={0}
              end={bmr.toFixed(2)}
              duration={2}
              delay={0.3}
            />
          </div>
        </div>
        <div className="flex gap-3  items-center my-5">
          {" "}
          <label className="font-bold" htmlFor="activity-level">Activity Level:</label>
          <select
            className="border-2  py-3 pl-6 px-6 rounded-xl focus:outline-none focus:bg-white focus:border-blue-500"
            id="activity-level"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="sedentary">Sedentary</option>
            <option value="lightly active">Lightly Active</option>
            <option value="moderately active">Moderately Active</option>
            <option value="very active">Very Active</option>
            <option value="extremely active">Extremely Active</option>
          </select>
        </div>
        <button
          className="py-3 px-10 mt-6 my-6 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white
          transition duration-150 hover:scale-105  hover:from-blue-600 hover:to-indigo-600"
          onClick={calculateTdee}
        >
          Calculate TDEE
        </button>
        <div className="flex items-start justify-center">
          <div className="flex flex-col items-center border-2 px-24 py-6  mt-3 rounded-lg border-blue-600 bg-white">
            <p className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text">
              TDEE (kcal)
            </p>
            <CountUp
              className="text-3xl fade font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text"
              decimals={2}
              start={0}
              end={tdee.toFixed(2)}
              duration={2}
              delay={0.3}
            />
          </div>
        </div>
      </div>
      <div className=" mt-12 w-[800px]">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">
            BMR & TDEE Tips and Tricks !
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">
              Boost Your BMR (Slightly):
            </h3>
            <ul className="list-disc pl-4">
              <li className="mb-2">
                Muscle Up: Muscle burns more calories at rest than fat. Consider
                incorporating strength training to increase your muscle mass,
                which can give your BMR a small but long-term boost.
              </li>
              <li className="mb-2">
                Spicy Things Up: Capsaicin, a compound found in chili peppers,
                may temporarily increase your metabolic rate. However, the
                effect is small and tolerance can build.
              </li>
            </ul>
          </div>

          <div className="space-y-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">
              Be Mindful of TDEE Calculations:
            </h3>
            <ul className="list-disc pl-4">
              <li className="mb-2">
                Honesty is Key: Activity levels can be tricky to estimate. Be
                honest with yourself about your daily movement. Don't
                overestimate workouts and underestimate daily activities like
                fidgeting.
              </li>
              <li className="mb-2">
                Track and Adjust: Use a calorie tracking app or monitor your
                weight for a few weeks after calculating your TDEE. Fine-tune
                your calorie intake based on observed weight changes.
              </li>
              <li className="mb-2">
                Beware the Weekend Warrior: If you're very active on weekends
                but mostly sedentary during the week, your TDEE calculation
                might be inaccurate. Consider averaging your activity level
                throughout the week.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          width="400.59653"
          height="300.44451"
          viewBox="0 0 937.59653 653.44451"
        >
          <title>biking</title>
          <polygon
            points="195.992 26.994 200.088 364.913 377.078 451.126 372.982 113.208 195.992 26.994"
            fill="#f2f2f2"
          />
          <polygon
            points="142.208 0 9.957 271.502 189.403 358.913 185.307 20.994 142.208 0"
            fill="#f2f2f2"
          />
          <polygon
            points="937.597 381.414 580.403 207.422 584.499 545.34 805.345 652.916 937.597 381.414"
            fill="#f2f2f2"
          />
          <polygon
            points="388.982 113.208 393.078 451.126 570.069 537.34 565.973 199.422 388.982 113.208"
            fill="#f2f2f2"
          />
          <path
            d="M581.70174,506.22225l-5,112s13,106,10,109-11,9-5,16,28,12,29,8,3-118,3-118l7-135Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#2f2e41"
          />
          <path
            d="M581.70174,506.22225l-5,112s13,106,10,109-11,9-5,16,28,12,29,8,3-118,3-118l7-135Z"
            transform="translate(-131.20174 -123.27775)"
            opacity="0.2"
          />
          <path
            d="M586.70174,741.22225s-25,19-28,19-30,9-11,13,65,2,66-4-3-24.20866-3-24.20866Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#2f2e41"
          />
          <path
            d="M586.70174,741.22225s-25,19-28,19-30,9-11,13,65,2,66-4-3-24.20866-3-24.20866Z"
            transform="translate(-131.20174 -123.27775)"
            opacity="0.2"
          />
          <path
            d="M524.70174,422.22225s-11,4-11,7-10,41-12,43-3,11-3,11-10,23-8,23,19-4,20,0,9-25,9-25l17-34Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#469eff"
          />
          <path
            d="M490.70174,510.22225s3,22,11,24,0-28,0-28Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#ffb8b8"
          />
          <path
            d="M516.70174,410.22225s6,13,9,20,31-18,31-18-15-11-15-16S516.70174,410.22225,516.70174,410.22225Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#ffb8b8"
          />
          <path
            d="M228.2409,735.27771c6.70634,24.79066,29.67708,40.14415,29.67708,40.14415s12.0976-24.84013,5.39126-49.6308-29.67707-40.14414-29.67707-40.14414S221.53456,710.487,228.2409,735.27771Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#3f3d56"
          />
          <path
            d="M238.0954,729.94993c18.40229,17.91389,20.65,45.45172,20.65,45.45172s-27.58831-1.50634-45.99061-19.42023-20.65-45.45172-20.65-45.45172S219.6931,712.036,238.0954,729.94993Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#469eff"
          />
          <path
            d="M466.70174,776.22225a91,91,0,1,1,91-91A91.10284,91.10284,0,0,1,466.70174,776.22225Zm0-180a89,89,0,1,0,89,89A89.10056,89.10056,0,0,0,466.70174,596.22225Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#2f2e41"
          />
          <path
            d="M746.70174,776.22225a91,91,0,1,1,91-91A91.10284,91.10284,0,0,1,746.70174,776.22225Zm0-180a89,89,0,1,0,89,89A89.10025,89.10025,0,0,0,746.70174,596.22225Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#2f2e41"
          />
          <circle cx="335.5" cy="561.94451" r="6" fill="#2f2e41" />
          <circle cx="617.5" cy="561.94451" r="6" fill="#2f2e41" />
          <polygon
            points="344.42 553.337 342.58 552.552 394.845 429.931 543.055 432.955 543.342 433.405 616.342 547.405 614.658 548.484 541.945 434.934 396.155 431.958 344.42 553.337"
            fill="#2f2e41"
          />
          <polygon
            points="500.125 576.128 538.538 440.672 540.462 441.217 502.875 573.761 603.374 560.952 603.626 562.937 500.125 576.128"
            fill="#2f2e41"
          />
          <rect
            x="572.2018"
            y="563.17975"
            width="1.99988"
            height="147.08501"
            transform="translate(-413.07405 460.30478) rotate(-44.4491)"
            fill="#2f2e41"
          />
          <rect
            x="666.29998"
            y="542.22229"
            width="22.80351"
            height="1.99993"
            transform="translate(-155.67744 931.13616) rotate(-74.76942)"
            fill="#2f2e41"
          />
          <polygon
            points="398.476 424.166 396.524 423.723 401.247 402.945 384.5 402.945 384.5 389.945 386.5 389.945 386.5 400.945 403.753 400.945 398.476 424.166"
            fill="#2f2e41"
          />
          <path
            d="M643.70174,512.22225s0-6,13-3,53,11,56,10,2,6-11,9-28-4-31-6S643.70174,512.22225,643.70174,512.22225Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#2f2e41"
          />
          <rect x="450.5" y="567.94451" width="26" height="10" fill="#469eff" />
          <path
            d="M632.70174,718.22225a20,20,0,1,1,20-20A20.02229,20.02229,0,0,1,632.70174,718.22225Zm0-38a18,18,0,1,0,18,18A18.02094,18.02094,0,0,0,632.70174,680.22225Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#2f2e41"
          />
          <circle cx="394.5" cy="272.94451" r="24" fill="#ffb8b8" />
          <path
            d="M601.70174,508.22225s-69,40-68,53,53,84,53,84,4,21,8,21,29,9,30,3-8-13-7-17-44-77-44-77,96.30708-36,76.15354-67S601.70174,508.22225,601.70174,508.22225Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#2f2e41"
          />
          <path
            d="M603.70174,662.22225s-12,3-14,7-37,17-27,20,68,4,70,2,0-25.2126-8-25.1063S607.70174,669.22225,603.70174,662.22225Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#2f2e41"
          />
          <path
            d="M525.70174,433.22225l22.5-27.5s25.5-7.5,36.5,7.5,41,52,51,60,24,39,19,40-33-11-44-3-32,9-33,5-61-71-61-80,6.39359-10.93113,6.39359-10.93113Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#469eff"
          />
          <rect
            x="502.70174"
            y="507.22225"
            width="38"
            height="6"
            rx="3"
            transform="translate(68.70297 -267.99528) rotate(19.4707)"
            fill="#2f2e41"
          />
          <path
            d="M469.70174,500.22225s-35,10-32,21,35-13,35-13Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#ffb8b8"
          />
          <path
            d="M560.70174,413.22225s-14,12-17,26-18,39-18,39l-61,20s-4,19,2,19,73-14,75-17,45-60,45-60S590.70174,409.22225,560.70174,413.22225Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#469eff"
          />
          <path
            d="M510.79531,368.44381a4.73339,4.73339,0,0,1-2.06116,1.03435,1.47087,1.47087,0,0,1-1.70452-1.1807,6.11136,6.11136,0,0,1-2.33876,2.99963c-1.1451.59683-2.91578.09638-3.08083-1.18434a5.40475,5.40475,0,0,1-1.244,2.62583,1.8631,1.8631,0,0,1-2.61916.08755c.50148,2.74053.192,5.55888.34944,8.34046s.89921,5.73046,3.00075,7.55954c3.06485,2.66751,7.67364,2.00916,11.7052,1.50379a3.55294,3.55294,0,0,1,1.83433.10034c1.50955.64313,1.44107,2.7445,1.46142,4.38521a12.18456,12.18456,0,0,0,10.66923,11.57068,6.10787,6.10787,0,0,0,4.53952-1.1079c1.14466-.97023,1.72935-2.55159,3.041-3.28043,2.13359-1.18558,4.72122.54346,6.28115,2.4208s3.09735,4.18665,5.5139,4.53031c3.196.4545,5.63028-2.80262,6.82457-5.80177a33.82171,33.82171,0,0,0-.67217-26.2798C545.62186,362.22039,522.82536,359.91951,510.79531,368.44381Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#2f2e41"
          />
          <path
            d="M933.09041,776.18124l-1.77735-.918c23.082-44.624,10.73926-102.5752-3.67871-143.332a439.29051,439.29051,0,0,0-37.27783-78.67481l1.69043-1.06836a441.53687,441.53687,0,0,1,37.47217,79.0752C944.0699,672.39315,956.49959,730.92245,933.09041,776.18124Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#2f2e41"
          />
          <rect
            x="908.61157"
            y="587.22257"
            width="72.18033"
            height="1.99936"
            transform="matrix(0.17975, -0.98371, 0.98371, 0.17975, 65.05255, 1288.53009)"
            fill="#2f2e41"
          />
          <rect
            x="895.70138"
            y="600.54655"
            width="2.00072"
            height="98.35141"
            transform="translate(-333.5586 661.65986) rotate(-42.93968)"
            fill="#2f2e41"
          />
          <rect
            x="939.19743"
            y="715.2221"
            width="58.00862"
            height="2.00031"
            transform="translate(-310.66012 957.99953) rotate(-54.13715)"
            fill="#2f2e41"
          />
          <circle cx="825" cy="400.44451" r="10" fill="#469eff" />
          <circle cx="716" cy="477.44451" r="10" fill="#3f3d56" />
          <circle cx="760" cy="487.44451" r="10" fill="#3f3d56" />
          <circle cx="740" cy="526.44451" r="10" fill="#469eff" />
          <circle cx="865" cy="551.44451" r="10" fill="#3f3d56" />
          <circle cx="832" cy="562.44451" r="10" fill="#3f3d56" />
          <circle cx="855" cy="594.44451" r="10" fill="#3f3d56" />
          <circle cx="750" cy="412.44451" r="10" fill="#3f3d56" />
          <rect y="651.44451" width="903" height="2" fill="#2f2e41" />
          <rect
            x="170.20174"
            y="536.5846"
            width="98"
            height="98"
            transform="translate(190.95803 -154.42515) rotate(30)"
            fill="#f2f2f2"
          />
          <path
            d="M239.20174,669.5846a22,22,0,1,1,22-22A22.02489,22.02489,0,0,1,239.20174,669.5846Zm0-42a20,20,0,1,0,20,20A20.02229,20.02229,0,0,0,239.20174,627.5846Z"
            transform="translate(-131.20174 -123.27775)"
            fill="#3f3d56"
          />
        </svg>
      </div>
    </div>
  );
}

export default CalorieCount;
