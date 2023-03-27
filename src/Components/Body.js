import CourseCard from './CourseCard'
import { useNavigate } from 'react-router-dom'

const Body = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/LinearAlgebra')
  }
  return (
    <div className="course-list">
        <CourseCard onClick={onClick}/>
        <CourseCard />
        <CourseCard />
    </div>
  )
}

export default Body