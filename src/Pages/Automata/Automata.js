import NavigationBar from "../../Components/NavigationBar"
import AlgorithmList from "../../Components/AlgorithmList"

const Automata = () => {
  const item = [
    {
      title: "Finite State Machine",
      description: "Finite State Machine",
      link: "Automata/GraphSimulation"
    },
    {
      title: "Turing Machine",
      description: "Turing Machine",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Pushdown Automata",
      description: "Pushdown Automata",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Context Free Grammar",
      description: "Context Free Grammar",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    }]
  return (
    <div className="Automata">
        <NavigationBar className="NavBar"
        algoPath='/Automata'
        quizPath='/Automata/Quiz'
        questionPath='/Automata/Question'/>
        <AlgorithmList items={item}/>
    </div>
  )
}

export default Automata