import React from "react";

const Interest = () => {
  return (
    <div className="mt-6">
      <div className="uppercase flex justify-between">
        <p className="text-gray-600 font-semibold">YOUR INTERESTS</p>
        <p className="font-semibold text-gray-400">Edit</p>
      </div>
      <hr className='border my-2' />
      <ul className="ml-4 text-gray-500">
        <li className="list-disc">Arts</li>
        <li className="list-disc">Beauty</li>
        <li className="list-disc">Entertainment</li>
        <li className="list-disc">Travel</li>
        <li className="list-disc">Personal</li>
        <li className="list-disc">Politics</li>
        <li className="list-disc">Space Science</li>
      </ul>
    </div>
  );
};

export default Interest;
