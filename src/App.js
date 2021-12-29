import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { pagePaths } from "./utils/constants";
import Blogs from "./pages/Blogs";
import { RemoveDuplicates } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={pagePaths.root} element={<Dashboard />} />
          <Route path={pagePaths.blogs} element={<Blogs />} />
          <Route
            path={pagePaths.removeDuplicates}
            element={<RemoveDuplicates />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
