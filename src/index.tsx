import React from "react";
import { createRoot } from "react-dom/client";

import "./common/types.blockly";
import "./common/blocks";

import "./global.css";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("root 要素が見つかりません");

createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
