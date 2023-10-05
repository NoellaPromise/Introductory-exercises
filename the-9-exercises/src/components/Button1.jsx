import { useState } from "react";

export default function ButtonComponents() {
  const [count, setCount] = useState(0);
  function addCount() {
    return setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="flex p-6 justify-center flex-col">
      <h1 className="py-6 text-center">
        Button has been clicked {count} times
      </h1>
      <div className="w-full flex justify-center">
        <button
          className="bg-green-900 p-1 border rounded-sm w-fit text-white"
          onClick={addCount}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}
