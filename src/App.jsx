import { useState } from "react";
import { twMerge } from "tailwind-merge";
import "./App.css";

function getTextClass(count) {
  if (count >= 500) return "text-purple-500";
  if (count >= 50) return "text-blue-500";
  if (count >= 5) return "text-green-500";
  if (count <= -500) return "text-yellow-500";
  if (count <= -50) return "text-orange-500";
  if (count <= -5) return "text-red-500";
  return "text-stone-800";
}

function App() {
  const [count, setCount] = useState(1);

  const baseClass = "flex items-center justify-center p-[20px] bg-[#f9f9f9]";
  const finalClass = twMerge(`${baseClass} ${getTextClass(count)}`);

  return (
    <div className="flex flex-col items-center">
      <div className="p-[2em] flex gap-[20px]">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-[#f9f9f9] border border-solid border-black p-[20px]"
        >
          count + 1
        </button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="bg-[#f9f9f9] border border-solid border-black p-[20px]"
        >
          count - 1
        </button>
        <button
          onClick={() => setCount((prev) => prev * 10)}
          className="bg-[#f9f9f9] border border-solid border-black p-[20px]"
        >
          count * 10
        </button>
      </div>
      <p className={finalClass}>{count}</p>
    </div>
  );
}

export default App;
