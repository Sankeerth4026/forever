import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PASSWORD = "midnight";

const categories = ["All", "Love", "Philosophy", "Feelings", "AboutUs"];
const writings = [
  {
    id: 1,
    title: "The Valentine Week",
    date: "feb 14, 2026",
    category: "Love",
    file: "/writings/Valentines_Writing.txt"
  },
  {
    id: 2,
    title: "Loving Missing and a whole new set of feelings",
    date: "Nov 15, 2025",
    category: "Feelings",
    file: "/writings/Love_Writing_2.txt"
  },
];

export default function Archive() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [content, setContent] = useState("");

  const [inputPassword, setInputPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleUnlock = () => {
    if (inputPassword === PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const filtered = writings.filter((w) => {
    const matchesSearch = w.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || w.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    if (selected) {
      fetch(selected.file)
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch(() => setContent("Failed to load content."));
    }
  }, [selected]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">

      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-purple-950/20 to-black" />

      <AnimatePresence mode="wait">

        {!unlocked ? (
          <motion.div
            key="lock"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center min-h-screen px-6"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUnlock();
              }}
              className="text-center max-w-md w-full"
            >
              <h1 className="text-4xl font-bold mb-8 tracking-widest">Enter Password</h1>

              <input
                type="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                className={`w-full bg-purple-950/20 border ${
                  error ? "border-red-500" : "border-purple-800/40"
                } rounded-xl px-4 py-3 text-white placeholder-purple-400 focus:outline-none focus:border-purple-500 transition`}
                placeholder="password"
              />

              <button
                type="submit"
                className="mt-6 w-full bg-purple-800 hover:bg-purple-700 transition rounded-xl py-3"
              >
                Unlock
              </button>

              {error && (
                <p className="text-red-400 mt-4 text-sm">Incorrect password.</p>
              )}
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="archive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 py-20"
          >
           
            <h1 className="text-5xl font-bold text-center mb-12 tracking-widest">Archive</h1>

          
            <div className="max-w-xl mx-auto mb-8">
              <input
                type="text"
                placeholder="Search writings..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-purple-950/20 border border-purple-800/40 rounded-xl px-4 py-3 text-white placeholder-purple-400 focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div className="flex justify-center flex-wrap gap-4 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full border transition ${
                    activeCategory === cat
                      ? "bg-purple-800 border-purple-500"
                      : "border-purple-800 text-purple-400 hover:bg-purple-900/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.03 }}
                  className="bg-purple-950/15 border border-purple-800/30 rounded-2xl p-6 cursor-pointer hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500"
                  onClick={() => setSelected(item)}
                >
                  <p className="text-sm text-purple-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">Click to read full writing...</p>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {selected && (
                <motion.div
                  className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center px-6 z-50 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelected(null)} 
                >
                  <motion.div
                    className="absolute w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[200px]"
                    animate={{
                      x: [0, 50, -50, 0],
                      y: [0, -30, 30, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div
                    className="relative bg-purple-950/20 border border-purple-800/40 rounded-2xl max-w-3xl w-full p-8 max-h-[80vh] overflow-y-auto z-10"
                    onClick={(e) => e.stopPropagation()} // prevent modal click from closing
                  >
                    <button
                      onClick={() => setSelected(null)}
                      className="mb-6 text-purple-400 hover:text-purple-200 transition"
                    >
                      ← Close
                    </button>

                    <p className="text-sm text-purple-500 mb-2">
                      {selected.date} • {selected.category}
                    </p>

                    <h2 className="text-3xl font-bold mb-6">{selected.title}</h2>

                    <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                      {content}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
