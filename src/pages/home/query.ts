export const fetchMovies = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDFhNDUyOGExMzVkZWIyZTgzOGZiYjJkYWI1OTQzNCIsInN1YiI6IjY1OWQ4MjY2ZDY1OTBiMDI1Y2IyMmY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QQ9bD3RKkvUqa2G1byaIHifapgcU3WIYNcYzHihPftM",
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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDFhNDUyOGExMzVkZWIyZTgzOGZiYjJkYWI1OTQzNCIsInN1YiI6IjY1OWQ4MjY2ZDY1OTBiMDI1Y2IyMmY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QQ9bD3RKkvUqa2G1byaIHifapgcU3WIYNcYzHihPftM",
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
