import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Recommends from "../components/Recommends";
import Viewer from "../components/Viewer";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../firebaseConfig";
import { setMovies } from "../feature/movie/movieSlice";
import { selectUserName } from "../feature/user/userSlice";
import { collection, onSnapshot } from "firebase/firestore";
import Originals from "../components/Originals";
import NewDisney from "../components/NewDisney";
import Trending from "../components/Trending";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommend = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    onSnapshot(collection(db, "movie"), (snapShot) => {
      console.log(snapShot.docs);
      snapShot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];

            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];

            break;

          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommend,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
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
