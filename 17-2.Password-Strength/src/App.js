import { useState } from "react";
import "./App.css";
import PasswordInput from "./components/PasswordInput";
import Progressbar from "./components/Progressbar";
import zxcvbn from 'zxcvbn'


function App() {

  const [password, setPassword] = useState("")

  const testResult = zxcvbn(password)
  const percent = testResult.score * 100 / 4

  const createPassLabel = ()=>{
    switch (testResult.score) {
      case 0:
          return 'خیلی ضعیف'
      case 1:
          return 'ضعیف'
      case 2:
          return 'متوسط'
      case 3:
          return 'خوب'
      case 4:
          return 'قوی'
      default:
          return ""
  }
  }

  const functionProgressColor = ()=>{
    switch (testResult.score) {
      case 0:
          return "#828282"
      case 1:
          return "#ea1111"
      case 2:
          return "#ffad00"
      case 3:
          return "#9bc158"
      case 4:
          return "#00b500"
      default:
          return "#none"
  }
}
const changePasswordColor = ()=>({
  width: `${percent}%`,
  background: functionProgressColor(),
  height: "7px"
})


  return (
    <div className="app">
      <div className="container pt-5 d-flex  justify-content-center  align-items-center ">
        <div className="row col-md-4 border rounded p-3">
          <PasswordInput password={password} setPassword={setPassword} />
          <Progressbar
          percent={percent}
          functionProgressColor = {functionProgressColor}
          changePasswordColor={changePasswordColor}
          createPassLabel={createPassLabel}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
