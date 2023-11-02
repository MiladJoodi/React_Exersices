import { useState } from "react";
import "./App.css";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";

function App() {

  const [type, setType] = useState('password')

  const handleClick = ()=>{
    if(type === 'password'){
      setType('text')
    }else{
      setType('password')
    }
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
