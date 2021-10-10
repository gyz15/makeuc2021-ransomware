import Header from "./components/Header";
import styled from "styled-components";
import FullPage from "./components/FullPage";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <AppBg>
      <Header />
      <FullPage>
        <PageSection id="what_is_it">
          <h1>What is it</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nobis suscipit omnis cum libero, culpa praesentium? Quaerat odio
            vero quia iure blanditiis eius asperiores accusantium quos. Aliquid
            aperiam delectus in labore maxime similique nihil hic. Tenetur
            obcaecati dolorem temporibus cumque officiis excepturi laborum
            pariatur, reprehenderit soluta natus nulla quidem adipisci.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nobis suscipit omnis cum libero, culpa praesentium? Quaerat odio
            vero quia iure blanditiis eius asperiores accusantium quos. Aliquid
            aperiam delectus in labore maxime similique nihil hic. Tenetur
            obcaecati dolorem temporibus cumque officiis excepturi laborum
            pariatur, reprehenderit soluta natus nulla quidem adipisci.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nobis suscipit omnis cum libero, culpa praesentium? Quaerat odio
            vero quia iure blanditiis eius asperiores accusantium quos. Aliquid
            aperiam delectus in labore maxime similique nihil hic. Tenetur
            obcaecati dolorem temporibus cumque officiis excepturi laborum
            pariatur, reprehenderit soluta natus nulla quidem adipisci.
          </p>
        </PageSection>
      </FullPage>
      <FullPage>
        <section id="what_does_it_do">
          <h1>What does it do</h1>
          <VideoDiv />
        </section>
      </FullPage>
      <FullPage>
        <section id="demonstration">
          <h1>Demo</h1>
          <VideoDiv />
        </section>
      </FullPage>
      <FullPage>
        <PageSection id="what_can_you_do">
          <h1>What can you do</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nobis suscipit omnis cum libero, culpa praesentium? Quaerat odio
            vero quia iure blanditiis eius asperiores accusantium quos. Aliquid
            aperiam delectus in labore maxime similique nihil hic. Tenetur
            obcaecati dolorem temporibus cumque officiis excepturi laborum
            pariatur, reprehenderit soluta natus nulla quidem adipisci.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nobis suscipit omnis cum libero, culpa praesentium? Quaerat odio
            vero quia iure blanditiis eius asperiores accusantium quos. Aliquid
            aperiam delectus in labore maxime similique nihil hic. Tenetur
            obcaecati dolorem temporibus cumque officiis excepturi laborum
            pariatur, reprehenderit soluta natus nulla quidem adipisci.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nobis suscipit omnis cum libero, culpa praesentium? Quaerat odio
            vero quia iure blanditiis eius asperiores accusantium quos. Aliquid
            aperiam delectus in labore maxime similique nihil hic. Tenetur
            obcaecati dolorem temporibus cumque officiis excepturi laborum
            pariatur, reprehenderit soluta natus nulla quidem adipisci.
          </p>
        </PageSection>
      </FullPage>
    </AppBg>
  );
}

export default App;

const AppBg = styled.div`
  height: 100vh;
  width: 100vw;
`;

const PageSection = styled.section`
  width: 80%;
`;

const VideoDiv = styled.div`
  height: 30rem;
  width: 50rem;
  background-color: gray;
`;
