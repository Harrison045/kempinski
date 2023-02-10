import React from 'react';

const LatestPost = () => {
    return (
        <div>
            
            <h1 className='text-center'>Latest Post</h1>
            <br/>
            <br/>
            <p className='text-center'>News and Updates</p>
            <br/>
            <br/>
            <br/>
            <div className='bg-dark  report '>
                <div className='text-center bg-black py-10 h-60 w-50 mx-auto report1 text-white'>
                    <h2>Get Our Report Here</h2>
                    <p>Get the best reports in your inbox</p>
                    <input type="email" placeholder='Enter Email here' className='mails w-50 h-10 rounded-lg'/>
                </div>
            </div>
        </div>
    );
}

export default LatestPost;
