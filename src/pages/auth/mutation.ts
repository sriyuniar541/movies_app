export const mutationLogin = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new",
      {
        headers: {
          Authorization: `Bearer ${
            import.meta.env.VITE_APP_API_READ_ACCES_TOKEN
          }`,
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
