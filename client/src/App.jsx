import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./Page/Home";
import React from 'react';
// import { HeadSection } from "./Page/Head";


function App() {
  return (
    <>
    {/* <HeadSection /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

