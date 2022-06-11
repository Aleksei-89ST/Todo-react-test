import React from "react";
import { BsCheck } from "react-icons/bs";

const Check = ({ isCompleted }) => {
  return (
    <div className="border-2 rounded-lg border-pink-400 w-5 h-5">
      {isCompleted && <BsCheck size={24} className="text-gray-900 w-4/5 mx-auto " />}
    </div>
  );
};

export default Check;
