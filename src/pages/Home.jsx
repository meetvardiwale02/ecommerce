import React from 'react'
import Announcement from '../component/Announcement';
import Categories from '../component/Categories';
import Navbar from '../component/Navbar';
import Products from '../component/Products';
import Slider from '../component/Slider';
import Newsletter from  '../component/Newsletter'
import Footer from '../component/Footer';

const Home = () => {
  return ( 
      <div>
            <Announcement/>
             <Navbar/>
             <Slider/>
             <Categories />
             <Products/>
             <Newsletter/>
             <Footer/>
      </div>  
  );
} 

export default Home;