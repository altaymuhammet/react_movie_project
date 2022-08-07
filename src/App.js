import React from "react";

//ROUTING
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import Header from "./Components/Header";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import NotFound from "./Components/NotFound";

//STYLES
import GlobalStyle from "./GlobalStyles";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
