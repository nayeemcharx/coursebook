import NavigationBar from "../../Components/NavigationBar"
import AlgorithmList from "../../Components/AlgorithmList"

const MultivariableCalculus = () => {
  const item = [
    {
      title: "Partial Derivatives",
      description: "Partial Derivatives",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Gradient",
      description: "Gradient",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Divergence",
      description: "Divergence",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Curl",
      description: "Curl",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Laplacian",
      description: "Laplacian",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Double Integral",
      description: "Double Integral",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    }
  ]
  return (
    <div className="Multivariable-Calculus">
        <NavigationBar className="NavBar"
         algoPath='/MultivariableCalculus'
         quizPath='/MultivariableCalculus/Quiz'
         questionPath='/MultivariableCalculus/Question'/>
        <AlgorithmList items={item}/>
    </div>
  )
}

export default MultivariableCalculus