import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Signup from "./screens/Signup";
import Timer from "./screens/Timer";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/timer"
          element={
            <ProtectedRoutes>
              <Timer />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default App;
