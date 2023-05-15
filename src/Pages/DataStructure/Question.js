import NavigationBar from "../../Components/NavigationBar"
import QuestionList from "../../Components/QuestionList"
const Question = () => { 
  return (
    <div className="Linear-Algebra">
        <NavigationBar className="NavBar"
        algoPath='/DataStructure'
        quizPath='/DataStructure/Quiz'
        questionPath='/DataStructure/Question'
        />
        <QuestionList apicall="https://coursebookserver.vercel.app/api/datastructure"/>
    </div>
  )
}
export default Question

