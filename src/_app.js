import React from "react";
import "./styles/app.css";
import {BrowserRouter as Router} from "react-router-dom"
import Layout from "./components/Layout"

function App() {
  return (
    <Router>
      <Layout/>
    </Router>
  );
}

export default App;
