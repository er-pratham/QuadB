import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowList from "./Components/ShowList";
import ShowDetails from "./Components/ShowDetails";

const App = () => {
  return (
    
      <Routes>
        <Route exact path="/" element={<ShowList/>} />
        <Route path="/shows/:id" element={<ShowDetails/>} />
      </Routes>
    
  );
};

export default App;
