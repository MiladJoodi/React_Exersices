import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  console.log(dark);

  return (
    <div className={dark ? "app dark-mode" : "app"}>
      <div className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>فروشگاه</li>
              <li>محصولات جدید</li>
              <li>خرید حضوری</li>
              <li>ثبت سفارش</li>
              <li>تماس با ما</li>
            </ul>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => setDark(!dark)}
                checked={dark}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <h3>{dark ? "لایت مود فعال است" : "دارک مود فعال است"}</h3>
        </div>
        <div className="container">
          <div className="card">
            {/* item 1 */}
            <div className="card-item">
              <img src="image/1.jpg" />
              <h2>محصول اول</h2>
              <p>این محصول اول است</p>
            </div>
            {/* item 2 */}
            <div className="card-item">
              <img src="image/2.jpg" />
              <h2>محصول دوم</h2>
              <p>این محصول دوم است</p>
            </div>
            {/* item 3 */}
            <div className="card-item">
              <img src="image/3.jpg" />
              <h2>محصول سوم</h2>
              <p>این محصول سوم است</p>
            </div>
            {/* end item */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
