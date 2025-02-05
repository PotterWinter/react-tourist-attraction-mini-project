import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from "./Page/Homepage";
import React from 'react';
// import { HeadSection } from "./Page/Head";


function App() {
  return (
    <>
    {/* <HeadSection /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

