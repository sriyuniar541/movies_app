export const fetchMovies = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${
            import.meta.env.VITE_APP_API_READ_ACCES_TOKEN
          }`,
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

export const fetchTvShow = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${
            import.meta.env.VITE_APP_API_READ_ACCES_TOKEN
          }`,
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
