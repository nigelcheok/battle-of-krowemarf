import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { Hero } from '../Components/Hero/Hero';

import HeroImage from '../Images/hero5.jpg'

export function Home() {
  return (
    <div>
      <Navbar/>
      {/*<h1>Battle of Krowemarf</h1>*/}
      <Hero image={HeroImage} title="Battle of Krowemarf" description="The battle between React, Angular and Vue."/>
    </div>
  );
}