import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/*start searchbar */}
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
      {/*end searchbar */}

      <div className="gallery">
        <img src="https://images.pexels.com/photos/18684565/pexels-photo-18684565/free-photo-of-old-tenements-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  );
}

export default App;
