import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import EpisodeList from "./components/EpisodeList.js";
import EpisodeCard from "./components/EpisodeCard.js";
import LocationList from "./components/LocationsList.js";
import Welcome from "./components/WelcomePage";
import "./index.css";
import styled from "styled-components";

export default function App() {
  const Image = `styled.img`;

  return (
    <div>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" />

      <header className="navigation" />

      <Route exact path="/" component={Welcome} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationList} />
      <Route path="/episodes" component={EpisodeList} />
    </div>
  );
}
