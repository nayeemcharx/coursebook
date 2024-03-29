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
  const onClickToMultivariableCalculus = () => {
    navigate('/MultivariableCalculus')
  }
  const onClickToMicrocontroller = () => {
    navigate('/Microcontroller')
  }
  const onClickToAutomata = () => {
    navigate('/Automata')
  }
  const onClickToDataStructure = () => {
    navigate('/DataStructure')
  }
  return (
    <div className="course-list">
        <CourseCard 
          title="Multivariable Calculus"
          image={mvcImg}
          onClick={onClickToMultivariableCalculus} />
        <CourseCard
          title="Microcontroller"
          image={MicrocontrollerImg}
          onClick={onClickToMicrocontroller} />
        <CourseCard 
          title="Linear Algebra"
          image={linear_algebraImg}
          onClick={onClickToLinearAlgebra} />
        <CourseCard 
          title="Automata"
          image={automataImg}
          onClick={onClickToAutomata} />
        <CourseCard 
          title="Data Structure and Algorithms"
          image={algorithmImg}
          onClick={onClickToDataStructure} />
          
    </div>
  )
}

export default Body