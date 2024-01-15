export const mutationLogin = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDFhNDUyOGExMzVkZWIyZTgzOGZiYjJkYWI1OTQzNCIsInN1YiI6IjY1OWQ4MjY2ZDY1OTBiMDI1Y2IyMmY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QQ9bD3RKkvUqa2G1byaIHifapgcU3WIYNcYzHihPftM",
        },
      }
    );

    const data = await res.json();
    localStorage.setItem("guest_session_id", data.guest_session_id);

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
