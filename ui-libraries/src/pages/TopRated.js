import React from 'react';
import TableComponent from '../component/Table';
import Footer from '../component/Footer';
import NavbarComponents from '../component/Navbar';

const TopRated = () => {
  return (
    <div>
      <NavbarComponents/>
      <h1>top rated</h1>
      <TableComponent/>
      <Footer/>
    </div>
  )
}

export default TopRated
