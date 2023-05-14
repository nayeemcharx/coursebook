import NavigationBar from "../../Components/NavigationBar"
import QuestionList from "../../Components/QuestionList"

const Question = () => { 
  const item = [
    {
      title: "24th batch final",
      description: false,
      link: "https://drive.google.com/file/d/15wX6zyl9Z9-UgiX0TK__mLYEI9a5ZV_S/preview"
    },
    {
      title: "24th batch incourse",
      description: false,
      link: ""
    },
    {
      title: "23th batch final",
      description: false,
      link: "https://drive.google.com/file/d/16rIa_Z5fk3wxQnm0P9vJ2C_7KwuwrhlJ/preview"
    },
    {
      title: "23th batch incourse",
      description: false,
      link: "https://drive.google.com/file/d/1-228o-OkkgoMFP7fH_7O2E8Mm8XK3fkv/preview"
    }
  ]
  return (
    <div className="Linear-Algebra">
       <NavigationBar className="NavBar"
         algoPath='/Microcontroller'
         quizPath='/Microcontroller/Quiz'
         questionPath='/Microcontroller/Question'/>
         <QuestionList items={item}/>
    </div>
  )
}

export default Question

