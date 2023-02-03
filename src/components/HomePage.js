import React from 'react';
import Harry from './Harry';
import Management from './Pages/Management';
import Testimony from './Pages/Testimony';
import TypeWrite from './TypeWrite';


const HomePage = () => {
    return (
        <div>
            <TypeWrite/>
            <Harry/>
            <Management/>
            <Testimony/>
        </div>
    );
}

export default HomePage;
