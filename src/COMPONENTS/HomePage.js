import { useContext } from 'react'
import { myBox } from '../App'


function HomePage() 
{

    const { ss } = useContext(myBox)
    // ss = setStage

    function startTheQuiz()
    {
        // Logic to navigate to Question component
        ss("question")
        // setStage("question")
    }

  return (
    <div>
      <button  onClick={startTheQuiz}>Start Quiz</button>
    </div>
  )
}

export default HomePage
