import { useState } from "react";
import MemeDisplay from "../components/MemeDisplay";
import { getRandomMeme } from "../api/memeApi";

const Home = () => {
  const [memeUrl, setMemeUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateMeme = async () => {
    setLoading(true);
    try {
      const data = await getRandomMeme();
      setMemeUrl(data.url);
    } catch (error) {
      console.error("Error fetching meme:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-3xl font-bold">Meme Generator 😂</h1>

      <MemeDisplay image={memeUrl} />

      {loading && <p>Loading meme...</p>}

      <button
        onClick={generateMeme}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        Generate Meme
      </button>
    </div>
  );
};

export default Home;
