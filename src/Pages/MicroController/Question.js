import NavigationBar from "../../Components/NavigationBar"
import QuestionList from "../../Components/QuestionList"

const Question = () => { 
  return (
    <div className="Linear-Algebra">
       <NavigationBar className="NavBar"
         algoPath='/Microcontroller'
         quizPath='/Microcontroller/Quiz'
         questionPath='/Microcontroller/Question'/>
         <QuestionList apicall="https://coursebookserver.vercel.app/api/microcontroller"/>
    </div>
  )
}

export default Question

