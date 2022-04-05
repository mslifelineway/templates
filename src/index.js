import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { GlobalContextProvider } from "./contexts/GlobalContext";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const toastMessageOptions = {
  autoClose: 2000,
  position: "top-right",
  hideProgressBar: true,
  nnewestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: false,
  pauseOnHover: true,
};

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer {...toastMessageOptions} />
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
