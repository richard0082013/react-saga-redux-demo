import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => (
  <Container textAlign="center">
    <Header>
      Welcome to Media Library built with React, Redux, and Redux-saga
    </Header>
    <Link to="/library">
      <Button content="Go to Library" primary />
    </Link>
  </Container>
);

export default Home;
