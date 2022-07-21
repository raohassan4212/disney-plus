import React from "react";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Viewer from "../components/Viewer";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewer />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;