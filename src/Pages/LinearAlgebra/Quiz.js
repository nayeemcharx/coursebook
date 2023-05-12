import NavigationBar from "../../Components/NavigationBar"

const Quiz = () => { 

  return (
    <div className="Linear-Algebra">
       <NavigationBar className="NavBar" 
        algoPath='/LinearAlgebra'
        quizPath='/LinearAlgebra/Quiz'
        questionPath='/LinearAlgebra/Question'
        />
    </div>
  )
}

export default Quiz
