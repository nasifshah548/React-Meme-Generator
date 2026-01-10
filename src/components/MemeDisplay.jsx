const MemeDisplay = ({ image, loading }) => {
  return (
    <div className="w-full h-80 bg-slate-100 rounded-xl flex items-center justify-center overflow-hidden border">
      {loading ? (
        <p className="text-slate-500 font-medium animate-pulse">
          Summoning memes... 🚉
        </p>
      ) : image ? (
        <img
          src={image}
          alt="Generated meme"
          className="max-w-full max-h-full object-contain"
        />
      ) : (
        <p className="text-slate-400 text-sm text-center px-4">
          Your meme will appear here 🚉
        </p>
      )}
    </div>
  );
};

export default MemeDisplay;
