export const fetchRatedMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
        "guest_session_id"
      )}/rated/movies?language=en-US&page=1&sort_by=created_at.as&api_key=${
        import.meta.env.VITE_APP_KEY
      }`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const fetchRatedTvShow = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
        "guest_session_id"
      )}/rated/tv?language=en-US&page=1&sort_by=created_at.as&api_key=${
        import.meta.env.VITE_APP_KEY
      }`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
