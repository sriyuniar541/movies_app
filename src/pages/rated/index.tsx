import { useState, useEffect } from "react";
import { Container, Header, Menu, Segment } from "semantic-ui-react";
import { DisplayType } from "../home";
import { useQuery } from "@tanstack/react-query";
import { fetchRatedMovies, fetchRatedTvShow } from "./query";
import { ColumnDisplay } from "../home/column-display";
import { useNavigate } from "react-router-dom";

export const Rated = () => {
  const navigate = useNavigate();
  const [activeTabs, setActiveTabs] = useState<DisplayType>(DisplayType.Movies);

  const { data: ratedMovies, isLoading: isLoadingRatedMovies } = useQuery({
    queryKey: [DisplayType.Movies, "ratedMovies"],
    queryFn: fetchRatedMovies,
  });

  const { data: ratedTvShows, isLoading: isLoadingRatedTvShows } = useQuery({
    queryKey: [DisplayType.TvShows, "ratedTvShows"],
    queryFn: fetchRatedTvShow,
  });

  const displayData =
    activeTabs === DisplayType.Movies ? ratedMovies : ratedTvShows;

  const isLoggedIn = localStorage.getItem("guest_session_id") != null;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Container style={{ marginTop: 30 }}>
      <Menu pointing secondary>
        <Menu.Item
          name="Movies"
          active={activeTabs === DisplayType.Movies}
          onClick={() => setActiveTabs(DisplayType.Movies)}
        />
        <Menu.Item
          name="Tv Shows"
          active={activeTabs === DisplayType.TvShows}
          onClick={() => setActiveTabs(DisplayType.TvShows)}
        />
      </Menu>
      <Segment>
        <div>
          <Header as={"h2"}>
            {activeTabs === DisplayType.Movies
              ? "Rated Movies"
              : "Rated Tv Shows"}
          </Header>
          {isLoadingRatedMovies || isLoadingRatedTvShows ? (
            <p>Loading...</p>
          ) : (
            <ColumnDisplay
              data={displayData?.results || []}
              displayType={activeTabs}
              isRated
            />
          )}
        </div>
      </Segment>
    </Container>
  );
};
