import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeButton = styled(Button)`
  color: white !important;
  background: blue !important;
`;
const Home = () => (
  <Container textAlign="center">
    <Header>
      Welcome to Media Library built with React, Redux, and Redux-saga
    </Header>
    <Link to="/library">
      <HomeButton content="Go to Library" />
    </Link>
  </Container>
);

export default Home;
