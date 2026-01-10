const MemeDisplay = ({ image, loading, onShare, onDownload }) => {
  return (
    <div className="relative w-full h-80 bg-slate-100 rounded-xl overflow-hidden border flex items-center justify-center">
      {/* Action Icons */}
      {image && !loading && (
        <div className="absolute top-2 right-2 z-10 flex gap-2">
          {/* Share Button */}
          <button
            onClick={onShare}
            aria-label="Share meme"
            className="relative group w-9 h-9 rounded-md bg-black/60 text-white
             flex items-center justify-center
             hover:bg-black/80 transition"
          >
            {/* Tooltip */}
            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2
                   whitespace-nowrap text-xs bg-black text-white
                   px-2 py-1 rounded opacity-0
                   group-hover:opacity-100 transition"
            >
              Share
            </span>
            {/* Share Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 12v5a2 2 0 002 2h6a2 2 0 002-2v-5M12 16V4m0 0l-4 4m4-4l4 4"
              />
            </svg>
          </button>

          {/* Download Button */}
          <button
            onClick={onDownload}
            aria-label="Download meme"
            className="relative group w-9 h-9 rounded-md bg-black/60 text-white
             flex items-center justify-center
             hover:bg-black/80 transition"
          >
            {/* Tooltip */}
            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2
                   whitespace-nowrap text-xs bg-black text-white
                   px-2 py-1 rounded opacity-0
                   group-hover:opacity-100 transition"
            >
              Download
            </span>
            {/* Download Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <p className="text-slate-500 font-medium animate-pulse">
          Summoning memes... 🚉
        </p>
      )}

      {/* Meme Image */}
      {!loading && image && (
        <img
          src={image}
          alt="Generated meme"
          className="w-full h-full object-contain"
        />
      )}

      {/* Empty State */}
      {!loading && !image && (
        <p className="text-slate-400 text-sm text-center px-4">
          Your meme will appear here 🚉
        </p>
      )}
    </div>
  );
};

export default MemeDisplay;
