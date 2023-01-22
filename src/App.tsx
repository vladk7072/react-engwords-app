import React, { useState, useEffect } from "react";
import "./app.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./pages/Main";
import { AddPage } from "./pages/AddPage";

export const App = () => {

  const [error, setError] = useState("");

  const handleOffline = () => {
    setError("You are offline");
  }
  const handleOnline = () => {
    setError("You are online");
  }
  useEffect(() => {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
  
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  
  const [time, setTime] = useState("");
  
  setInterval(() => {
    var date = new Date();
    var datetime = date.toLocaleTimeString("uk-UA");
    let newtime = datetime.slice(0, -3);
    setTime(newtime);
  }, 1000);

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Main time={time} error={error} />} />
        <Route path="/adding-words" element={<AddPage time={time} />} />
      </Routes>
    </div>
  );
};
