import React from 'react';
import { NavLink } from 'react-router';

const Home = () => {
    return (
        <div className='flex gap-10'>
         
            <NavLink className='bg-gray-200 text-black p-10 ' to="/login">Login</NavLink>
            <NavLink className='bg-gray-200 text-black p-10 ' to="/signup">Sign Up</NavLink>
            <NavLink className='bg-gray-200 text-black p-10 ' to="/about">About</NavLink>
        </div>
    );
};

export default Home;