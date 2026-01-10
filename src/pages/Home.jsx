import { useState, useEffect } from "react";
import Header from "../components/Header";
import MemeDisplay from "../components/MemeDisplay";
import { getRandomMeme } from "../api/memeApi";

const Home = () => {
  const [memeUrl, setMemeUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch a meme
  const generateMeme = async () => {
    setLoading(true);
    try {
      const data = await getRandomMeme();
      setMemeUrl(data.url);
    } catch (error) {
      console.error("Failed to fetch meme", error);
    } finally {
      setLoading(false);
    }
  };

  // Generate meme on first load
  useEffect(() => {
    generateMeme();
  }, []);

  // Share meme (native share or clipboard fallback)
  const shareMeme = async () => {
    if (!memeUrl) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Meme Station 🚉",
          text: "Check out this meme 😂",
          url: memeUrl,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      await navigator.clipboard.writeText(memeUrl);
      alert("Meme link copied to clipboard!");
    }
  };

  // Download meme image
  const downloadMeme = async () => {
    if (!memeUrl) return;

    try {
      const response = await fetch(memeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "meme-station-meme.jpg";
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download meme", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100">
      <Header />

      <main className="flex flex-col items-center p-6">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col gap-6">
          {/* Meme Card (with Share + Download icons inside) */}
          <MemeDisplay
            image={memeUrl}
            loading={loading}
            onShare={shareMeme}
            onDownload={downloadMeme}
          />

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
