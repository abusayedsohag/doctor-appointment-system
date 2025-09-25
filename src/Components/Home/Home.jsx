import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <Link to={"/doctor-list"} className='btn'>Find Doctor</Link>
            </div>
            <div>
                As a Doctor
            </div>
        </div>
    );
};

export default Home;