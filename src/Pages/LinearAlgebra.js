import NavigationBar from "../Components/NavigationBar"
import TopicCard from "../Components/TopicCard"
import AlgorithmList from "../Components/AlgorithmList"

const LinearAlgebra = () => {
  const item=[{
    title:"Finding null Space",
    description:"A detailed description about how null space works and stuffs",
    link:'LinearAlgebra/NullSpaceSimul'
},
{
  title:"Calculate Rank of a matrix",
  description:"sdflsdjhfjiseohrwe sdfikhsdijfwe rweuirhweirbwe ewruiowerhwekrtjh",
  link:''
}]
  return (
    <div className="Linear-Algebra">
        <NavigationBar className="NavBar"/>
        <AlgorithmList items={item}/>
    </div>
  )
}

export default LinearAlgebra

