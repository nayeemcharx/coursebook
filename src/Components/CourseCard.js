const CourseCard = ({title,image,onClick}) => {

  return (
    <div className="course-card">
        <img classname="course-image" src={image} onClick={onClick} alt="course" style={{height:'75%', width:'100%'}}/>
        <div className="course-info" >
            <h4><b>{title}</b></h4>
        </div>
    </div>
  )
}

export default CourseCard