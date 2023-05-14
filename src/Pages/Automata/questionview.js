import NavigationBar from "../../Components/NavigationBar"
import QuestionList from "../../Components/QuestionList"

const Question = () => { 
  const item = [
    {
      title: "24th batch final",
      description: "",
      link: "Question"
    }
  ]
  return (
    <div className="Linear-Algebra">
        <NavigationBar className="NavBar"
        algoPath='/Automata'
        quizPath='/Automata/Quiz'
        questionPath='/Automata/Question'/>
        <QuestionList items={item}/>
    </div>
    
    
  )
}

export default Question

