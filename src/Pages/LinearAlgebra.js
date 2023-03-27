import NavigationBar from "../Components/NavigationBar"
import TopicCard from "../Components/TopicCard"

const LinearAlgebra = () => {
  return (
    <div className="Linear-Algebra">
        <NavigationBar className="NavBar"/>
        <div className="topic-list">
          <TopicCard />
          <TopicCard />
        </div>
    </div>
  )
}

export default LinearAlgebra