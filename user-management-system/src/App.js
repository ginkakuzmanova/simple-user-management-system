import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import UsersAddition from "./pages/users/UsersAddition";
// import UserEditing from "./pages/users/userEditing";
import Header from "./components/Header";
// import UsersTable from "./pages/users/usersList";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <AppRoutes>
        </AppRoutes>
      </BrowserRouter>
    </div>
  );
}
export default App;
