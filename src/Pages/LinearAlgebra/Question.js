import NavigationBar from "../../Components/NavigationBar"
import QuestionList from "../../Components/QuestionList"

const Question = () => { 
  return (
    <div className="Linear-Algebra">
       <NavigationBar className="NavBar" 
        algoPath='/LinearAlgebra'
        quizPath='/LinearAlgebra/Quiz'
        questionPath='/LinearAlgebra/Question'
        />
        <QuestionList apicall="/api/linear"/>
    </div>
  )
}

export default Question

