
import { useState, createContext } from "react"
import HomePage from "./COMPONENTS/HomePage";
import Question from "./COMPONENTS/Question";
import Result from "./COMPONENTS/Result";
import './App.css'
//Create that BOX

export const myBox = createContext()


function App() 
{
  const [ stage, setStage ] = useState("home")
  // stage = "result"
  const [ myScore, setMyScore ] = useState(0)

  return (
    <div>
      <myBox.Provider value={ {ss :setStage, ms :myScore, sms :setMyScore} }>
          { stage == "home" && <HomePage/> }
          { stage == "question" && <Question/> }
          { stage == "result" && <Result/> }
      </myBox.Provider>
        
      
    </div>
  );
}

export default App;
