import Home from "./Component/Home";
import "./App.css";
import Play from "./Component/Play";
import Footer from "./Component/Footer";
import LoginForm from "./Component/LoginForm";

import Snake from "./Component/Snake";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Home/>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
