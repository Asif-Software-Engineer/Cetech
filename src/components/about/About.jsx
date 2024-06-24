import React from 'react'
import { AboutUs } from "./AboutUs";
import { Vision } from './Vision';
import { Skill } from './Skill';

export const About = () => {
  return (
    <div className='abouts'>
      <AboutUs/>
      <Vision/>
      <Skill />
    </div>
  )
}
