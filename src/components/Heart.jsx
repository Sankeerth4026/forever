import { useState } from "react";

export default function Heart({ onClick }) {
  const [ripples, setRipples] = useState([]);

  const createRipple = () => {
    const id = Date.now();
    setRipples((prev) => [...prev, id]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r !== id));
    }, 600); // faster ripple lifetime
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={createRipple}
      className="relative cursor-pointer"
    >
      <div
        className="
          text-red-500 text-9xl font-bold
          animate-pulse
          drop-shadow-[0_0_40px_rgba(255,0,120,0.9)]
          hover:scale-110
          hover:drop-shadow-[0_0_120px_rgba(255,0,150,1)]
          transition-transform duration-150
        "
      >
        ❤️
      </div>

      {ripples.map((id) => (
        <div
          key={id}
          className="absolute inset-0 flex items-center justify-center text-red-500 text-6xl animate-ping"
        >
          💖
        </div>
      ))}
    </div>
  );
}
