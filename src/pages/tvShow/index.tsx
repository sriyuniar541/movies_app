import {
  Loader,
  Segment,
  Header,
  Grid,
  Image,
  List,
  Label,
  Accordion,
  Card,
} from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTvShowDetails } from "./query";

export const TvShow = () => {
  const { id } = useParams<string>();

  if (!id) {
    return <div>Invalid ID</div>;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["tvshows"],
    queryFn: () => fetchTvShowDetails(id),
  });

  if (isLoading) {
    return <Loader active />;
  }

  const seasonsPanel =
    data.seasons &&
    data.seasons.map((season: any) => ({
      key: season.id,
      title: `Season ${season.season_number}`,
      content: {
        content: (
          <Card
            style={{ height: "70px" }}
            meta={season.air_data}
            description={`${season.episode_count} episodes`}
          ></Card>
        ),
      },
    }));

  return (
    <div style={{ marginTop: 50 }}>
      <Segment>
        <Header>{data.title}</Header>
        <Grid columns={2} divided textAlign="left" style={{ marginTop: 20 }}>
          <Grid.Row>
            <Grid.Column width={6}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Image
                  size="medium"
                  centered
                  src={`https://tmdb.org/t/p/original/${data.poster_path}`}
                />
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <List>
                <List.Item>
                  <List.Header>Created By :</List.Header>

                  {data.created_by && (
                    <List.Description>
                      {data.created_by
                        .map((creator: any) => creator.name)
                        .join(", ")}
                    </List.Description>
                  )}
                </List.Item>

                <List.Item>
                  <List.Header>Episode Run Time :</List.Header>
                  {data.episode_run_time && data.episode_run_time.length > 0
                    ? data.episode_run_time.join(", ")
                    : "N/A"}
                </List.Item>

                <List.Item>
                  <List.Header>Genres :</List.Header>
                  {data.genres && data.genres.length > 0
                    ? data.genres.map((genre: any) => (
                        <Label key={genre.id}>{genre.name}</Label>
                      ))
                    : "N/A"}
                </List.Item>
                <List.Item>
                  <List.Header>Popularity :</List.Header>
                  {data.popularity}
                </List.Item>

                <List.Item>
                  <List.Header>Production Companies :</List.Header>
                  {data.production_companies &&
                  data.production_companies.length > 0
                    ? data.production_companies
                        .map((company: any) => company.name)
                        .join(",")
                    : "N/A"}
                </List.Item>

                <List.Item>
                  <List.Header>Release Date :</List.Header>
                  {data.first_air_date}
                </List.Item>
                <List.Item>
                  <List.Header>Networks :</List.Header>

                  {data.networks &&
                    data.networks.map((network: any) => (
                      <Image
                        key={network.id}
                        src={`https://tmdb.org/t/p/original/${network.logo_path}`}
                        size="small"
                        style={{ marginTop: "10" }}
                      />
                    ))}
                </List.Item>
                <List.Item>
                  <List.Header>Number of Episode :</List.Header>
                  {data.number_of_episodes}
                </List.Item>
                <List.Item>
                  <List.Header>Number of Seasons :</List.Header>
                  {data.number_of_seasons}
                </List.Item>
                <List.Item>
                  <List.Header>Seasons :</List.Header>
                  <List.Description
                    style={{ height: "200px", overflowY: "scroll" }}
                  >
                    <Accordion
                      defaultActiveIndex={0}
                      panels={seasonsPanel}
                      styled
                    />
                  </List.Description>
                </List.Item>
                <List.Item>
                  <List.Header>Vote Averages :</List.Header>
                  {data.vote_average}
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};
