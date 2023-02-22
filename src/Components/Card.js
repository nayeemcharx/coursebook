import mvc from '../Assets/multivariable_calculus.png'
const Card = () => {
  return (
    <div className="course-card">
        <img src = {mvc} alt="course" style={{height:'60%', width:'90%'}}/>
        <div className="course-info">
            <h4><b>Course Name</b></h4>
            <p>Course Description</p>
        </div>
    </div>
  )
}

export default Card