import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="search-bar">
        <div class="input-group rounded">
          <span class="input-group-text border-0" id="search-addon">
            <button type="button" class="btn btn-danger">
              جستجو کن
            </button>
          </span>
          <input
            type="search"
            className="form-control rounded"
            placeholder="جستجو"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
