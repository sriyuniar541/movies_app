import { useState } from "react";
import { Button } from "semantic-ui-react";
import { ColumnDisplay } from "../home/column-display";
import { fetchMovies, fetchTvShow } from "./query";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

export const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  const { data: movieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  const { data: tvshowData, isLoading: isLoadingTvShow } = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShow,
  });

  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to="/auth" />;
  }

  return (
    <div style={{ marginTop: 50, height: "auto" }}>
      <Button.Group>
        <Button
          color={displayType === DisplayType.Movies ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </Button>
        <Button
          color={displayType === DisplayType.TvShows ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.TvShows)}
        >
          TvShows
        </Button>
      </Button.Group>

      {isLoadingMovies || isLoadingTvShow ? (
        <div>Loading...</div>
      ) : (
        <div style={{ margin: 20 }}>
          {displayType === DisplayType.Movies ? (
            <ColumnDisplay
              data={movieData.results}
              displayType={DisplayType.Movies}
            />
          ) : (
            <ColumnDisplay
              data={tvshowData.results}
              displayType={DisplayType.TvShows}
            />
          )}
        </div>
      )}
    </div>
  );
};
