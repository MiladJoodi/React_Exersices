import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Lists from "./Components/Lists";

function App() {
  return (
    <div className="app">
      <Layout>
        <Header />
        <Lists />
      </Layout>
    </div>
  );
}

export default App;
