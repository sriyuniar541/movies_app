export const fetchMovieDetails = async (movieID: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
      {
        headers: {
          Authorization:
          `Bearer ${import.meta.env.VITE_APP_API_READ_ACCES_TOKEN}`
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
