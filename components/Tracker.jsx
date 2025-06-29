import { useState } from "react";

export function Tracker() {
  const totalDays = 365;

  const [counts, setCounts] = useState([365]);

  return (
    <div className="w-full max-h-screen bg-[#1c1c1f] flex justify-center items-center py-10">
      <div className="w-full grid grid-cols-53 gap-y-[6px] bg-zinc-800 p-4 rounded-md">
        {counts.map((count, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-sm cursor-pointer transition-colors duration-200 bg-zinc-700`}
            title={`Day ${index + 1} — Count: ${count}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
