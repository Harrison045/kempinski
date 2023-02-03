import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './Edit.css'

function Fade  ()  {
    useEffect(()=>{
    AOS.init({duration:2000})
    },[])
    return (
        <div className='top'>
            <h1>Welcome to React Animation</h1><br/><br/>
            <div className='animation' data-aos="fade-up"></div>
            <div className='animation' data-aos="fade-down"></div>
            <div className='animation' data-aos="fade-right"></div>
            <div className='animation' data-aos="fade-left"></div>
            <div className='animation'></div>
            <h1>Flip</h1>
            <div className='animation' data-aos="flip-right"></div>
            <h1>Zoom Animation</h1>
            <div className='animation' data-aos='zoom-in'></div>
            <br/><br/><br/>
        </div>
    );
}

export default Fade;
