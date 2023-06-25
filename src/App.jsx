import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
const App = () => {
  return (
    <Router>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
