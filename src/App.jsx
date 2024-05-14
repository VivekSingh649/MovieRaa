import React, { useEffect, useRef } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import TopLoadingBar from "react-top-loading-bar";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { API_KEY } from "./config/constant";

function App() {
  const loadingBarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => loadingBarRef.current.continuousStart();
    const handleFinish = () => loadingBarRef.current.complete();

    handleStart();

    const timer = setTimeout(handleFinish, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <TopLoadingBar
        ref={loadingBarRef}
        color="#8b5cf6"
        height={3}
        fixed="true"
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<DetailsPage />} />
        <Route path="sign" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
