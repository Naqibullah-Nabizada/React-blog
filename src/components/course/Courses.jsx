import { Link } from 'react-router-dom';
import Course from './Course';
import './course.css';

const Courses = ({ courses, authors }) => {
    return (
        <section className="container">

            <div className="row col-2 my-2">
                <Link to={"/addCourse"} className="btn btn-primary">مقاله جدید <i className="fa fa-plus-circle" /> </Link>
            </div>

            <div className="row">
                <h5 className="p-3 bg-info rounded">لیست مقالات آموزشگاه برنامه نویسان</h5>
            </div>

            <div className="row mt-2" id='courses'>
                {courses.length > 0 && courses.map((course) => (
                    <Course key={course.id} course={course} />
                ))}
            </div>

        </section>
    )
}

export default Courses;