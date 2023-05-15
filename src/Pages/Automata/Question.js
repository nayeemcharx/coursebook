import NavigationBar from "../../Components/NavigationBar"
import QuestionList from "../../Components/QuestionList"
import React,{useEffect,useState} from 'react'
const Question = () => {
  
  const [questionData,setQuestionData]=useState([{}])
  useEffect(()=>{
    fetch("/api").then(
      response =>response.json()
    ).then(
      data=>{
        setQuestionData(data.dat)
      }
    )
  },[])
  return (
    <div className="Linear-Algebra">
        <NavigationBar className="NavBar"
        algoPath='/Automata'
        quizPath='/Automata/Quiz'
        questionPath='/Automata/Question'/>
        <QuestionList apicall="https://coursebookserver.vercel.app/api/automata"/>
    </div>
    
    
  )
}

export default Question

