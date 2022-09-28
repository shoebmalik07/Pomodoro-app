import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import {ContextProvider}  from "./contexts/UserAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ChakraProvider>
        <BrowserRouter>
    <ContextProvider>
          <App />
    </ContextProvider>
        </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>
);
