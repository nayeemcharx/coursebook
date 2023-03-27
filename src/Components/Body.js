import CourseCard from './CourseCard'
import { useNavigate } from 'react-router-dom'
import mvcImg from '../Assets/multivariable_calculus.png'
import MicrocontrollerImg from '../Assets/Microcontroller.png'
import linear_algebraImg from '../Assets/linear_algebra.jpg'
import automataImg from '../Assets/automata.png'
import algorithmImg from '../Assets/algorithm.gif'

const Body = () => {
  const navigate = useNavigate()
  const onClickToLinearAlgebra = () => {
    navigate('/LinearAlgebra')
  }
  const MVC={
    title:'Multivariable Calculus'
  }
  return (
    <div className="course-list">
        <CourseCard 
          title="Multivariable Calculus"
          image={mvcImg}
          onClick={onClickToLinearAlgebra} />
        <CourseCard
          title="Microcontroller"
          image={MicrocontrollerImg} />
        <CourseCard 
          title="Linear Algebra"
          image={linear_algebraImg}/>
        <CourseCard 
          title="Automata"
          image={automataImg}/>
        <CourseCard 
          title="Data Structure and Algorithms"
          image={algorithmImg}/>
          
    </div>
  )
}

export default Body