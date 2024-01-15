export const fetchTvShowDetails = async (tvShowID: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${tvShowID}?language=en-US`,
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
