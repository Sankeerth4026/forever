import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scenes = [
  { 
    id: -1, 
    text: `My Valentine`,
    isTitle: true,
    leftImage: "/images/title-left.jpg", 
    rightImage: "/images/title-right.jpg" 
  },
  { 
    id: 0, 
    text: `Valentine week is not a new concept for me. It's a "7-day celebration of love" celebrated every year all over the world.

But I've always wondered, "Is it really needed…?"

Well, half of that thought came because I was single and jealous, the other half was because of what I believed about love.`,
    leftImage: "/images/left1.png", 
    rightImage: "/images/right1.png" 
  },
  { 
    id: 1, 
    text: `To me, love is a sacred thing. It happens slowly, calmly and privately… handling all the chaos within ourselves.

Not on some scheduled calendar days, as if it's some kind of performance.

And I also used to wonder why exactly do couples who are already in love join to take part in this week? Aren't they already in love? Do they really need a week to express their love and not every day?

This is what I believed and was not soo supportive of this Valentine week.`,
    leftImage: "/images/left2.jpg", 
    rightImage: "/images/right2.jpg" 
  },
  { 
    id: 2, 
    text: `But now…..

Here I am celebrating this love-week and displaying all the love I can show.

Being in love, my perspective changed.

Now I've realised….

It's not really about needing a week dedicated to promote loving your loved ones.

It's about reminding your loved one they are loved and they will be loved forever.`,
    leftImage: "/images/left3.jpeg", 
    rightImage: "/images/right3.jpeg" 
  },
  { 
    id: 3, 
    text: `Life gets busy. We get caught up in responsibilities, stress, deadlines, personal battles, etc..

We get soo busy with our lives, we often times unknowingly forget to pause everything for a sec and acknowledge that we are being loved, supported, held on to at all times.

We forget to reward, appreciate and reassure that we will always be there and will love and be loved forever.

Soo Valentine week is not performance. It's a reminder.

To remember you have someone to love. To realise you are being loved. To remember to always appreciate love. To express your forever commitment. To reassure those butterflies are not just confined to the lovey-dovely stage of relationship.

It's not about replacing everyday love. It's about pausing everything in our busy life and acknowledging that we are loved and celebrating your love.

Love doesn't need a calendar, but the celebration does.`,
    leftImage: "/images/left4.jpeg", 
    rightImage: "/images/right4.jpg" 
  },
  { 
    id: 4, 
    text: `Soo….

Happy Valentine's Day, my love 😍

As long as I am here, 
you will always be loved, 
will always be craved,
will always have a shoulder to lean on, 
will always have a listener 
who hears your words like music.

You will always be held onto.

I'll clap the loudest at your highs.

At your lows? I'll stay even stronger.

When you doubt yourself, I'll remind you of your strength.
 When things feel unfair, I'll stand by you. 
 When things feel heavy, I'll help you carry it. 
 When everything feels noisy, I'll become your calm. 
 When everything feels tangled, I'll help you sort it out.

Any time… Every time!!

I'll make you laugh when you're acting mad. 
I'll tease you when you're angry.
You will always have me.
And I'll always be there even to disturb you.

You will always have a reason to celebrate love. ❤️`,
    leftImage: "/images/left5.png", 
    rightImage: "/images/right5.jpeg" 
  },
  { 
    id: 5, 
    text: `Now before you think it's over, I wanna give you a reminder of how much I love youu.

And what could be more perfect than to share my beloved and your favourite writings of all time.`,
    leftImage: "/images/left6.jpg", 
    rightImage: "/images/right6.jpg" 
  },
  { 
    id: 6, 
    text: `Loving, missing & whole new set of emotions`,
    isTitle: true,
    leftImage: "/images/left7.jpg", 
    rightImage: "/images/right7.png" 
  },
  { 
    id: 7, 
    text: `Loving, missing & whole new set of emotions

I am a type of person that strongly believes that you cannot completely understand something until and unless you yourself experience it.

That's the reason I don't usually write about love, about longing someone, about missing, etc.. All these complex emotions cannot be expressed just with words even though one had felt them. So, what right did I have, to write something about them when I haven't even experienced them.`,
    leftImage: "/images/left8.jpg", 
    rightImage: "/images/right8.jpg" 
  },
  { 
    id: 8, 
    text: `But Nowwww, Ohhh my god, I don't know if I have fully experienced the depth of those emotions but what I am experiencing is already overwhelming.

Soo now within all my rights, I'll write about these emotions and feelings. All caused by none other than my most unexpected miracle, my all time solace.

My love ❤️.`,
    leftImage: "/images/left9.jpg", 
    rightImage: "/images/right9.jpg" 
  },
  { 
    id: 9, 
    text: `Our hearts often dream about having someone who hopefully becomes The One. The One who can love us, bear us, understand us and most importantly someone we can trust, giving our hearts forever and have confidence they won't break it!!

But then with time we either forget we need one or realise the harsh truth that the world isn't Soo kind, such a person rarely exists and even more rarely crosses path with us.`,
    leftImage: "/images/left10.jpg", 
    rightImage: "/images/right10.jpg" 
  },
  { 
    id: 10, 
    text: `But rare doesn't always mean impossible, the chances are less but never zero. No matter how many times you fall in love, when this kind rare love crosses your path you will fall in love, in a way that makes every other one seem as if it's nothing. Soo embrace such a thing if it ever crosses your path.`,
    leftImage: "/images/left11.png", 
    rightImage: "/images/right11.jpeg" 
  },
  { 
    id: 11, 
    text: `Well that kind of love did cross my path, very unexpectedly, as if it was written like a part of a story which was waiting to be played in reality.

I don't usually believe in destiny but this one, the amount of coincidences it has and the way everything played out, I would never in a million years expect or even imagine such a thing could actually happen.

But against all the odds and obstacles it happened. So I'll embrace and protect it till the Veryy end.`,
    leftImage: "/images/left12.jpg", 
    rightImage: "/images/right12.jpg" 
  },
  { 
    id: 12, 
    text: `Now you may tell, shut the fuck up Sankeerth we all have been there and it's just the start, so all those butterflies and all are common, don't over do it.

Well you maybe right or you maybe wrong, either ways I am here to express what I feel, what I think and what I know.

And it's heart warmingly very beautiful.`,
    leftImage: "/images/left13.png", 
    rightImage: "/images/right13.jpg" 
  },
  { 
    id: 13, 
    text: `Soooo yes I love her sooo Soo much. "Love" feels like a small word to describe what I feel, but then again, even I don't really know how else to express.

That is the reason I add things like "very very much" "Sooo Soo much"

To make it better, just a simple "I love you" doesn't feel like it covers the entire depth of love I have.

Now don't think I have gone crazy in love.

I just don't know how to describe it. Then again,

If my love could really be expressed in simple words, can I really call it my love? Perhaps it would just be a language.`,
    leftImage: "/images/left14.png", 
    rightImage: "/images/right14.png" 
  },
  { 
    id: 14, 
    text: `And it's a good thing I cannot express it in words cause

My eyes which are already envying my heart for feeling something Soo deep my eyes only dream of feeling,

They would scream with such an intense jealousy that would burn away the letters and words carrying the weight and depth of my love, just to keep my love sacred, all for itself and always within my heart.`,
    leftImage: "/images/left15.jpg", 
    rightImage: "/images/right15.jpg" 
  },
  { 
    id: 15, 
    text: `I don't really know when my heart started to love you. When did it start to love you Soo much that it ached in your absence, ached even more when Forever wasn't soo certain.

What I know is somewhere between our "happy birthday Sankeerth" and "good night nannuluuu", between our "hello srija" and "bajjoo Bangaram", we fell for each other, veryyy deeply.

Not suddenly but with each going day.

We held pieces of eachother within our heart and in no time our hearts were filled with pieces of eachother.

They were Soo deep and Soo dear that we couldn't hold them in anymore and that's when they overflowed in the most beautiful form called, The Kiss.

Yes our first kiss, where words fell silent and our hearts spoke for themselves, telling everything they ever what to say.

Our first kiss, our cutest confession, the moment where it all began.`,
    leftImage: "/images/left16.jpg", 
    rightImage: "/images/right16.jpg" 
  },
  { 
    id: 16, 
    text: `"In the midst of winter, I found there was, within me, an invincible summer." — Albert Camus

"In your light, I learn how to love." — Rumi

And before you ask, "why do you love me Soooo much??"

Like Albert and Rumi have mentioned, even in my coldest corners, I found my warmth in you.

Following the warmth, came the light and in that light I learnt what love truly is.

So whenever you ask "why" I love you Soo much,

It's because my love didn't come from the world.

It was born from you,

And that's why it's

Deeper than the oceans, 
Sweeter than honey, 
Stronger than eternity, 
Gentler than spring, 
As pure as your heart,

and will burn in my heart

Forever 💖`,
    leftImage: "/images/left17.png", 
    rightImage: "/images/right17.png" 
  },
  { 
    id: 17, 
    text: `Click to reveal a secret...`,
    isSecret: true,
    leftImage: "/images/secret-left.jpg", 
    rightImage: "/images/secret-right.jpg" 
  },
];

export default function Experience() {
  const audioRef = useRef(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    if (isMusicPlaying) {
      audio.play().catch(err => console.log("Audio play failed:", err));
    }
  }, []);

  const toggleMusic = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => console.log("Audio play failed:", err));
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  const handleNextScene = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    } else {
 
      setIsFadingOut(true);
      setTimeout(() => {
        window.location.href = '/Archive';
      }, 1500); 
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleNextScene();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentScene]);

  const scene = scenes[currentScene];

  return (
    <div 
      className="h-screen w-screen bg-black relative overflow-hidden cursor-pointer select-none"
      onClick={handleNextScene}
    >
      {/* Fade-out overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isFadingOut ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black z-50 pointer-events-none"
      />
      {/* Background particles layer - larger, more visible */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`bg-${i}`}
          className="absolute text-purple-500/30 pointer-events-none"
          initial={{ 
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
          style={{
            fontSize: `${Math.random() * 40 + 20}px`,
            zIndex: 1
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Floating particles - foreground */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`fg-${i}`}
          className="absolute text-purple-400/20 pointer-events-none"
          initial={{ 
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            scale: 0
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
          style={{
            fontSize: `${Math.random() * 25 + 12}px`,
            zIndex: 5
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Scene Content Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={scene.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-between"
        >
          {/* Left Image - Extreme Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none"
          >
            <div className="w-64 max-h-[90vh] overflow-hidden shadow-[0_0_30px_rgba(160,0,255,0.4)] border-2 border-purple-500/40 rounded-lg">
              <img 
                src={scene.leftImage} 
                alt="Scene visual left"
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </motion.div>

          {/* Center Text with Scrollbar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 h-full flex items-center justify-center px-8 lg:px-80 z-20 py-8"
          >
            <div className="w-full max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent hover:scrollbar-thumb-purple-500/70">
              <div className="w-full text-center px-4 py-8">
                {scene.isTitle ? (
                  <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-tight whitespace-pre-wrap tracking-wide drop-shadow-[0_0_30px_rgba(160,0,255,1)] bg-black/60 backdrop-blur-sm p-10 md:p-12 lg:p-16 rounded-lg">
                    {scene.text}
                  </h1>
                ) : scene.isSecret ? (
                  <p className="text-purple-300 text-3xl md:text-4xl lg:text-5xl font-semibold italic leading-relaxed whitespace-pre-wrap tracking-wide drop-shadow-[0_0_25px_rgba(160,0,255,0.9)] bg-black/60 backdrop-blur-sm p-10 md:p-12 rounded-lg">
                    {scene.text}
                  </p>
                ) : (
                  <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed whitespace-pre-wrap font-light tracking-wide drop-shadow-[0_0_20px_rgba(160,0,255,0.9)] bg-black/50 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-lg">
                    {scene.text}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Image - Extreme Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none"
          >
            <div className="w-64 max-h-[90vh] overflow-hidden shadow-[0_0_30px_rgba(160,0,255,0.4)] border-2 border-purple-500/40 rounded-lg">
              <img 
                src={scene.rightImage} 
                alt="Scene visual right"
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Music Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={toggleMusic}
        className="absolute top-6 right-6 z-30 bg-purple-900/40 backdrop-blur-sm hover:bg-purple-800/60 text-white p-3 rounded-full border border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
      >
        {isMusicPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </motion.button>

      {/* Instruction hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/30 text-sm z-20"
      >
        Click or press Enter to continue
      </motion.div>

      {/* Background Music */}
      <audio ref={audioRef} src="/First Sight (Background Score).mp3" loop preload="auto" />

      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
      `}</style>
    </div>
  );
}