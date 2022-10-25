import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Courses from './components/course/Courses';
import AddCourse from './components/course/AddCourse';
import CourseInfo from './components/course/CourseInfo';

import axios from 'axios';

import './App.css';

const App = () => {


    const [courses, setCourses] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const { data: allCourses } = await axios.get("http://localhost:9000/courses");
                const {data: authorData} = await axios.get("http://localhost:9000/authors");
                setCourses(allCourses);
                setAuthors(authorData);
                
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchCourse();
    }, [])

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/' element={<Courses courses={courses} authors={authors} />} />
                <Route path='/addCourse' element={<AddCourse authors={authors} />} />
                <Route path='/courseInfo/:courseId' element={<CourseInfo />} />
            </Routes>
        </div>
    )
}

export default App;