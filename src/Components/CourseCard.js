import mvc from '../Assets/multivariable_calculus.png'
import PropTypes from 'prop-types'
const CourseCard = ({onClick}) => {

  return (
    <div className="course-card" onClick={onClick}>
        <img className="course-image" src = {mvc} alt="course" style={{height:'60%', width:'100%'}}/>
        <div className="course-info">
            <h4><b>Course Name</b></h4>
            <p>Course Description</p>
        </div>
    </div>
  )
}

CourseCard.defaultProps = {
  title: 'Course Name',
  description: 'Course Description',
  image: mvc,
  onClick: () => {console.log('Card Clicked')}
}

CourseCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func
}

export default CourseCard