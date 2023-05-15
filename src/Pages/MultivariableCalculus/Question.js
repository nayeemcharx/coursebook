import NavigationBar from "../../Components/NavigationBar"
import QuestionList from "../../Components/QuestionList"

const Question = () => { 
  return (
    <div className="Linear-Algebra">
        <NavigationBar className="NavBar"
         algoPath='/MultivariableCalculus'
         quizPath='/MultivariableCalculus/Quiz'
         questionPath='/MultivariableCalculus/Question'/>
         <QuestionList apicall="/api/multivariable"/>
    </div>
  )
}

export default Question

