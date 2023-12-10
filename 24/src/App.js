import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import { DataProvider } from "./component/Context";
import Content from "./component/Content";

function App() {
  return (
    <DataProvider>
      <div className="main-website">
        <div className="container">
          <BrowserRouter>
            <Header />

              <Content />

          </BrowserRouter>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
