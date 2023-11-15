import { useState } from "react";
import "./App.css";
import Categories from './Categories'
import Menu from './Menu'
import items from './data.js'

function App() {

  const[menuItems, setMenuItems]  = useState(items)

  const filterItems = (category) =>  {
    if(category === "همه"){
      setMenuItems(items)
      return;
    }
    console.log('omad');
    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }
  

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>محصولات ما</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
