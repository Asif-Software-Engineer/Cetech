import React from 'react'
import { AboutUs } from "./about-us/AboutUs";
import { Vision } from './about-us/Vision';
import { Skill } from './about-us/Skill';
import { Support } from './about-us/Support';
import { Ideas } from './about-us/Ideas';

export const About = () => {
  return (
    <div className='abouts'>
      <AboutUs/>
      <Vision/>
      <Skill />
      <Support/>
      <Ideas/>
    </div>
  )
}
