export const getRandomMeme = async () => {
  const response = await fetch("https://meme-api.com/gimme/wholesomememes");

  if (!response.ok) {
    throw new Error("Failed to fetch meme");
  }

  return response.json();
};
