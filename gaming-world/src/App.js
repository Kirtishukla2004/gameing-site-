import Home from "./Component/Home";
import "./App.css";
import Play from "./Component/Play";
import Footer from "./Component/Footer";
import LoginForm from "./Component/LoginForm";

import Snakegame from "./Component/Snakegame";
import Contact from "./Component/Contact";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Profile from "./Component/Profile";
import {useAuth0} from "@auth0/auth0-react"

import TicTacToe from "./Component/tictactoe";
import Sps from "./Component/SPS"
import MemoryGame from "./Component/MemoryGame"

function App() {
  return (
    <div>
     
      {" "}
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="home" Component={Home} />
        <Route path="play" Component={Play} />
        <Route path="contact" Component={Contact} />
        <Route path="profile" Component={Profile} />
        <Route path="login" Component={LoginForm} />
        <Route path="snake" Component={Snakegame}/>
        <Route path="memorygame" Component={MemoryGame}/>
       
     
        <Route path="tictactoe" Component={TicTacToe}/>
        <Route path="sps" Component={Sps}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
