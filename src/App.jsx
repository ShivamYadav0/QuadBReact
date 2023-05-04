import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen.jsx";
import Quad from "./components/Quad.jsx";
import ShowDetailsScreen from "./components/ShowDetailsScreen.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/show/:id" element={<ShowDetailsScreen />} />
      </Routes>
     <Quad/>
    </>
  );
};

export default App;
