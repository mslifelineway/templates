import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./containers";
// import { Loader } from "./components";
import { PAGE_PATHS } from "./utils/constants";
import "./App.css";

function App() {
  // const [isPageLoading, setIsPageLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsPageLoading(false);
  //   }, 1000);
  // }, [isPageLoading]);

  // if (isPageLoading) {
  //   return (
  //     <div className="bg__main">
  //       <Loader />
  //     </div>
  //   );
  // }
  return (
    <Router>
      <Routes>
        <Route exact path={PAGE_PATHS.ROOT} element={<Landing />} />
        {/* <Route path={PAGE_PATHS.TRANSACTIONS} element={<Transactions />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
