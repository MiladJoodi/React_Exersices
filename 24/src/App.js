import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Products from "./component/Products";
import { DataProvider } from "./component/Context";

function App() {
  return (
    <DataProvider>
      <div className="main-website">
        <div className="container">
          <BrowserRouter>
            <Header />

            <Routes>
              <Route path="/products" element={<Products />}></Route>
            </Routes>

          </BrowserRouter>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
