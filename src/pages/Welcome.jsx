import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Heart from "../components/Heart";

export default function Welcome() {
  const [stage, setStage] = useState(0);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const handleHeartClick = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play();
    }
    setStage(1);
  };

  const handleEnterExperience = () => {
    setStage(2); 

    setTimeout(() => {
      navigate("/experience");
    }, 2000);
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-black">
      <audio ref={audioRef} loop>
        <source src="/Dude Orchestral Suite.mp3"/>
      </audio>

      <div className="absolute inset-0 dark-mist 
        bg-[radial-gradient(circle_at_center,rgba(90,0,150,0.3),transparent_75%)]">
      </div>


      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_90%)]"></div>

      {stage === 1 &&
        [...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle text-purple-400"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 24 + 12}px`,
            }}
          >
            ✦
          </div>
        ))}

      {stage === 2 && (
        <div className="absolute inset-0 bg-black fade-black z-20"></div>
      )}

      <div className="relative z-10 flex h-full items-center justify-center">

        {stage === 0 && (
          <div onClick={handleHeartClick}>
            <Heart />
          </div>
        )}

        {stage === 1 && (
          <div
            onClick={handleEnterExperience}
            className="text-6xl text-purple-300 font-semibold 
            drop-shadow-[0_0_70px_rgba(160,0,255,1)]
            zoom-in cursor-pointer"
          >
            For You 💜
          </div>
        )}
      </div>

    </div>
  );
}