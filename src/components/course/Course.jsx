import { Link } from "react-router-dom";

const Course = ({course}) => {
    return (
        
        <div className="card shadow-lg" id="course">
        <Link to={`/courseInfo/${course.id}`}><img src={course.photo} alt="img" className="card-img-top" /></Link>
        <div className="card-body">
            <Link to={`courseInfo/${course.id}`} className='card-title text-dark'> {course.title} </Link>
            <hr />
            <div className='card-text d-flex justify-content-between'>
                <div className="text-primary">
                    <i className="fa fa-user" />
                    <span className="mx-2">{course.author}</span>
                </div>

                <div>
                    <i className="fa fa-clock-o mx-1 text-success" />
                    <span className="text-success">{course.time} دقیقه</span>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Course;