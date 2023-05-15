import NavigationBar from "../../Components/NavigationBar"

const Quiz = () => { 
  const mcq=[
    {
      questoin: "what is the correct answer?",
      A:"first answer",
      B:"second answer",
      C:"third answer",
      D:"fourth answer",
      correct:"A"
    },
    {
      questoin: "what is the correct answer for the second question?",
      A:"first answer",
      B:"second answer",
      C:"third answer",
      D:"fourth answer",
      correct:"C"
    },
    {
      questoin: "what is the correct answer for the third question?",
      A:"first answer",
      B:"second answer",
      C:"third answer",
      D:"fourth answer",
      correct:"D"
    }
  ]
  return (
    <div className="Linear-Algebra">
       <NavigationBar className="NavBar"
        algoPath='/DataStructure'
        quizPath='/DataStructure/Quiz'
        questionPath='/DataStructure/Question'
        />
    </div>
  )
}

export default Quiz

