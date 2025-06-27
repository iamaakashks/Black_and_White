import { useState } from "react";

export function Tracker() {
  const totalDays = 365;
  const greenShades = [
    'bg-zinc-700',   // 0 count
    'bg-green-400',  // > 0
    'bg-green-600',  // > 2
    'bg-green-800',  // > 4
  ];

  const [counts, setCounts] = useState(Array(totalDays).fill(0));

  const handleClick = (index) => {
    setCounts(prev => {
      const updated = [...prev];
      updated[index]++;
      return updated;
    });
  };

  const getColor = (count) => {
    if (count > 4) return greenShades[3];
    if (count > 2) return greenShades[2];
    if (count > 0) return greenShades[1];
    return greenShades[0];
  };

  return (
    <div className="w-full max-h-screen bg-[#1c1c1f] flex justify-center items-center py-10">
      <div className="w-full grid grid-cols-53 gap-y-[6px] bg-zinc-800 p-4 rounded-md">
        {counts.map((count, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-4 h-4 rounded-sm cursor-pointer transition-colors duration-200 ${getColor(count)}`}
            title={`Day ${index + 1} — Count: ${count}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
