import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}
export default App;
