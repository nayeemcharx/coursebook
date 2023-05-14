import NavigationBar from "../../Components/NavigationBar"
import QuestionList from "../../Components/QuestionList"

const Question = () => { 
  const item = [
    
    {
      title: "24th batch final",
      description: false,
      link: "https://drive.google.com/file/d/1B4O9k1kx-5JSrzxOz5Lpc0sgAcNLAcW8/preview"
    },
    {
      title: "24th batch incourse",
      description: false,
      link: "https://drive.google.com/file/d/1tNR8KdbKENsRywFVTLCIe2HW2befzfSA/preview"
    },
    {
      title: "23th batch final",
      description: false,
      link: "https://drive.google.com/file/d/1qHjA5rQT1-VW3at2BW0_jh4BFeUvRhCJ/preview"
    },
    {
      title: "23th batch incourse",
      description: false,
      link: "https://drive.google.com/file/d/14GVc5yLgQgE4-5DUawBrrxW2GOF2PdLO/preview"
    }
  ]
  return (
    <div className="Linear-Algebra">
        <NavigationBar className="NavBar"
         algoPath='/MultivariableCalculus'
         quizPath='/MultivariableCalculus/Quiz'
         questionPath='/MultivariableCalculus/Question'/>
         <QuestionList items={item}/>
    </div>
  )
}

export default Question

