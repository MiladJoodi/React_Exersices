import { useState } from "react";
import "./App.css";

function App() {

  // U7rtiKUp444M9xk6ImZnyzXbYzVKiULEvxOH2jkR2Kg
  const [value, setvalue] = useState(null)
  const [gallery, setGallery] = useState(null)

  const searchBtn = ()=>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=U7rtiKUp444M9xk6ImZnyzXbYzVKiULEvxOH2jkR2Kg&query=${value}>`)
    .then(res=> res.json())
    .then(data=> {
      console.log(data.results);
      setGallery(data.results)
    })
  }

  return (
    <div className="app">
      {/*start searchbar */}
      <div className="search-bar">
        <div class="input-group rounded">
          <span class="input-group-text border-0" id="search-addon">
            <button type="button" class="btn btn-danger" onClick={searchBtn}>
              جستجو کن
            </button>
          </span>
          <input
            type="search"
            className="form-control rounded"
            placeholder="جستجو"
            aria-label="Search"
            aria-describedby="search-addon"
            value={value}
            onChange={(e)=> setvalue(e.target.value)}
          />
        </div>
      </div>
      {/*end searchbar */}

      <div className="gallery">
        {gallery && gallery.map((item)=><img src={item.urls.regular} alt="" />)}
      </div>
    </div>
  );
}

export default App;
