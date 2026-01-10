import { useState, useEffect } from "react";
import Header from "../components/Header";
import MemeDisplay from "../components/MemeDisplay";
import { getRandomMeme } from "../api/memeApi";

const Home = () => {
  const [memeUrl, setMemeUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateMeme = async () => {
    setLoading(true);
    const data = await getRandomMeme();
    setMemeUrl(data.url);
    setLoading(false);
  };

  // Generate a meme right away when the page loads
  useEffect(() => {
    generateMeme();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100">
      <Header />

      <main className="flex flex-col items-center p-6">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center gap-6">
          {/* Meme Display */}
          <MemeDisplay image={memeUrl} loading={loading} />

          {/* Generate Button */}
          <button
            onClick={generateMeme}
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold
                       hover:bg-indigo-700 active:scale-95 transition
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Generate Meme 🎉
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
