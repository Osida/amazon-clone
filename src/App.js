import React from "react";
import "./App.css";
import { Header, Home } from "./components";

export default function App() {
  return (
    // BEM convention
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}
