import NavigationBar from "../../Components/NavigationBar"
import QuestionList from "../../Components/QuestionList"

const Question = () => { 
  const item = [
    {
      title: "25th batch final",
      description: false,
      link: "https://drive.google.com/file/d/1vnl2EpZThqLCGYq7qVV2zx0x7_8POx0_/preview"
    },
    {
      title: "25th batch incourse",
      description: false,
      link: "https://drive.google.com/file/d/1ScPk_uOZm2nHIg7TRdW-8CEM2GwcD_Ln/preview"
    },
    {
      title: "24th batch final",
      description: false,
      link: "https://drive.google.com/file/d/1vnl2EpZThqLCGYq7qVV2zx0x7_8POx0_/preview"
    },
    {
      title: "24th batch incourse",
      description: false,
      link: "https://drive.google.com/file/d/1vnl2EpZThqLCGYq7qVV2zx0x7_8POx0_/preview"
    },
    {
      title: "23th batch final",
      description: false,
      link: "https://drive.google.com/file/d/17w6nJBRmAok_-MyD6rdhZmXXo8h2QpAU/preview"
    },
    {
      title: "23th batch incourse",
      description: false,
      link: "https://drive.google.com/file/d/1KvBjZmdD5h9r2TIoqIQ8YmIY_RSTD2b_/preview"
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

