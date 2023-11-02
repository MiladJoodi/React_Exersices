import "./App.css";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";

function App() {

  const handleClick = ()=>{
    
  }

  return (
    <div className="wrapper">
      <div className="input-fields">
        <span onClick={handleClick}>
          <Icon icon={eye} size={25} />
        </span>
        <input type="password" />
      </div>
    </div>
  );
}

export default App;
