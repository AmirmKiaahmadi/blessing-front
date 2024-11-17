import React, { useState } from "react";
import myImage from "../../assets/images/images.png";
import { RxReset } from "react-icons/rx";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="h-screen flex flex-col  ">
      <div className="flex-none justify-start">
        <button
          className=" p-4 rounded-full m-4 bg-red-500"
          onClick={() => setCount(0)}
        >
          <RxReset className=" text-white" />
        </button>
      </div>
      <div className="text-center grow  ">
        <div className=" text-center items-center flex justify-center ">
          <img src={myImage} />
        </div>

        <h1 className="text-4xl mb-6">{count}</h1>

        <button
          onClick={() => setCount(count + 1)}
          className="px-14 py-12 bg-[#549660] text-white rounded-full text-3xl mt-12"
        >
          +
        </button>
      </div>
    </div>
  );
}
