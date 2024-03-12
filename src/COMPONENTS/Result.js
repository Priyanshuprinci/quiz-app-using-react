import { useContext } from 'react'
import { myBox } from '../App'

function Result() 
{
  const { ms } = useContext(myBox)
  // ms = myScore
  return (
    <div>
      <h1>The total score is {ms}</h1>
    </div>
  )
}

export default Result
