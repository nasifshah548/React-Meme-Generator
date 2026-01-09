const MemeDisplay = ({ image }) => {
  if (!image) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img
        src={image}
        alt="Generated MEME"
        className="max-w-xs sm:max-w-sm rounded"
      />
    </div>
  );
};

export default MemeDisplay;
