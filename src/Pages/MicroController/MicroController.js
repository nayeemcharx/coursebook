import NavigationBar from "../../Components/NavigationBar"
import AlgorithmList from "../../Components/AlgorithmList"

const MicroController = () => {
  const item = [
    {
      title: "Arduino",
      description: "Arduino",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Raspberry Pi",
      description: "Raspberry Pi",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "ESP32",
      description: "ESP32",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    }]
  return (
    <div className="Micro-Controller">
        <NavigationBar className="NavBar"
         algoPath='/Microcontroller'
         quizPath='/Microcontroller/Quiz'
         questionPath='/Microcontroller/Question'/>
        <AlgorithmList items={item}/>
    </div>
  )
}

export default MicroController