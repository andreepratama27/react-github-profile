import React from "react";
import Home from "./pages/home";
import "./App.css";
import { NotificationProvider } from "./context/_notification";

function App() {
  return (
    <div className="app-container">
      <NotificationProvider>
        <Home />
      </NotificationProvider>
    </div>
  );
}

export default App;
