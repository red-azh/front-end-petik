import React from 'react';
import TableComponent from '../component/Table';
import Footer from '../component/Footer';
import NavbarComponents from '../component/Navbar';
import CourseCards from '../component/CourseCards';

const Courses = () => {
  return (
    <div>
      <NavbarComponents/>
      <CourseCards/>
      <Footer/>
    </div>
  )
}

export default Courses
