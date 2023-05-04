import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen.jsx";
import ShowDetailsScreen from "./components/ShowDetailsScreen.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/show/:id" element={<ShowDetailsScreen />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
