import React from "react";
import Tryout from "./About/Tryout";
import TryoutWords from "./About/TryoutWords";
import TryoutWords1 from "./About/TryoutWords1";

const About = () => {
    const text = "About StartUp Lounge"
    const texts = "We believe that every business in African has a story and we are here to help"
    const text1 = "story to tell and we are here to grow the story of African enterprise"
  return (
    <div>
        <div className="h-screen  flex flex-col items-center justify-top py-10">
           <Tryout text={text}/>
      <br/>
      <TryoutWords texts={texts}/>
      <TryoutWords1 text1={text1}/> 
        </div>
      
    </div>
  );
};

export default About;
