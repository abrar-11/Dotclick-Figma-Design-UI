import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Layout/Layout"
const App = () => {
  return (
    <Router>
      <Routes >
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
