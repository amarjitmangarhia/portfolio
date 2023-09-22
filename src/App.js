import Component from "./components/Component.js";
import About from "./components/about/About.js";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {

  return (
    <div>

        <Routes>
          <Route exact path="/about" Component={About} />
          <Route exact path="/" Component={Component} />

        </Routes>




    </div>
  );
}

export default App;
