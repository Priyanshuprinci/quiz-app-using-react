import { useState, useContext } from 'react'
import { myBox } from '../App'

const myQuestions = [
  {
    title: "What is the use of React?",
    A: "It is used in server side programming",
    B: "It is used to create attractive user interfaces",
    C: "Both A and B",
    D: "None of the Above",
    Answer: "B"
  },
  {
    title: "What is 10+20",
    A: 300,
    B: -10,
    C: 30,
    D: 40,
    Answer: "C"
  },
  {
    title: "What is 1000 * 3",
    A: 3000,
    B: 60,
    C: -456,
    D: -560,
    Answer: "A"
  },
  {
    title: "Trignometry comes in which subject?",
    A: "Biology",
    B: "Maths",
    C: "Social Science",
    D: "English",
    Answer: "B"
  }
]


function Question() 
{
  const { ss, ms, sms } = useContext(myBox)
  // ss = setStage 

  const [questionIndex, setQuestionIndex] = useState(0)
  const [ answerChoosen, setAnswerChoosen ] = useState("")
  

  function nextQuestion()
  {
    // Logic to verify the answer.If the answer is correct increase the score by + 1, otherwise leave as it it
    if(answerChoosen == myQuestions[questionIndex].Answer)
    {
      sms(ms + 1)
    }

    // Logic to increase questionIndex by + 1
    setQuestionIndex(questionIndex + 1)
  }

  function goToResults()
  {
    // Logic to check the answer for that last question
    if(answerChoosen == myQuestions[questionIndex].Answer)
    {
      sms(ms + 1)
    }

    // Logic to go to results page ===> Result Component
    ss("result")
  }

  return (
    <div >
      <h3 >Q{questionIndex + 1} { myQuestions[questionIndex].title }</h3><br/>
      A. <button onClick={function()
      {
        setAnswerChoosen("A")
      }} >{ myQuestions[questionIndex].A }</button><br/><br/>

      B. <button onClick={function()
      {
        setAnswerChoosen("B")
      }} >{ myQuestions[questionIndex].B }</button><br/><br/>

      C. <button onClick={function()
      {
        setAnswerChoosen("C")
      }} >{ myQuestions[questionIndex].C }</button><br/><br/>

      D. <button onClick={function()
      {
        setAnswerChoosen("D")
      }} >{ myQuestions[questionIndex].D }</button><br/><br/>

      { questionIndex == myQuestions.length - 1 ? <button style={{marginLeft: "20px"}} className='btn btn-danger' onClick={goToResults}>Finish</button> :   <button style={{marginLeft: "20px"}} className='btn btn-success' onClick={nextQuestion}>Continue</button> }
     
    </div>
  )
}

export default Question
