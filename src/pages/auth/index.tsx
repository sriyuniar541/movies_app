import {
  Grid,
  Header,
  Button,
  Form,
  Segment,
  GridColumn,
} from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    await mutate();
    navigate("/");
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <GridColumn style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          Welcome Login by registering
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button color="violet" size="large" fluid onClick={handleLogin}>
              Login
            </Button>
          </Segment>
        </Form>
      </GridColumn>
    </Grid>
  );
};
