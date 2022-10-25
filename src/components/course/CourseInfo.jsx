import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CourseInfo = () => {

    const { courseId } = useParams();

    const [blogInfo, setBlogInfo] = useState({});
    const [authorInfo, setAuthorInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: blogData } = await axios.get(`http://localhost:9000/Courses/${courseId}`);
                const { data: authorData } = await axios.get(`http://localhost:9000/authors/${blogData.author}`);
                setBlogInfo(blogData);
                setAuthorInfo(authorData);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {
                Object.keys(blogInfo).length > 0 && (
                    <section className="container mt-5">
                        <div className="col-8 mx-auto my-5">
                            <div className="card py-3">
                                <img src={blogInfo.photo} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title text-end">{blogInfo.title}</h5>
                                    <p className="card-text" style={{ textAlign: 'justify', opacity: '.9' }}>{blogInfo.description}</p>
                                </div>
                                <div className="d-flex">
                                    <div className="mx-4 text-primary">
                                        <span>نویسنده: </span>
                                        <span>{authorInfo.name}</span>
                                    </div>
                                    <div className="text-success">
                                        <span>زمان مطالعه: </span>
                                        <span>{blogInfo.time} دقیقه</span>
                                    </div>
                                </div>
                            </div>
                            <Link to={"/"} className="btn btn-secondary mt-3">بازگشت</Link>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default CourseInfo;