import NavigationBar from "../Components/NavigationBar"
import TopicCard from "../Components/TopicCard"

const LinearAlgebra = () => {
  return (
    <div className="Linear-Algebra">
        <NavigationBar className="NavBar"/>
        <div className="ag-courses_box">
          <TopicCard topicTitile='Null Space' diffcult='medium'/>
          <TopicCard />
        </div>
    </div>
  )
}

export default LinearAlgebra