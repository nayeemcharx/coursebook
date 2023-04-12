import NavigationBar from "../Components/NavigationBar"
import AlgorithmList from "../Components/AlgorithmList"

const LinearAlgebra = () => {
  const item = [
    {
      title: "Null Space",
      description: "Null space of a matrix",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Row Space",
      description: "Row space of a matrix",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Column Space",
      description: "Column space of a matrix",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Rank",
      description: "Rank of a matrix",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Determinant",
      description: "Determinant of a matrix",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Inverse",
      description: "Inverse of a matrix",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Transpose",
      description: "Transpose of a matrix",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Orthogonal",
      description: "Orthogonal of a matrix",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Orthogonal Complement",
      description: "Orthogonal Complement of a matrix",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    }
  ]
  return (
    <div className="Linear-Algebra">
        <NavigationBar className="NavBar"/>
        <AlgorithmList items={item}/>
    </div>
  )
}

export default LinearAlgebra

