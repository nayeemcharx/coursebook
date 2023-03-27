import Header from "../Components/Header"
import TopicCard from "../Components/TopicCard"

const LinearAlgebra = () => {
  return (
    <div className="Linear-Algebra">
        <Header />
        <div className="topic-list">
          <TopicCard />
          <TopicCard />
        </div>
    </div>
  )
}

export default LinearAlgebra