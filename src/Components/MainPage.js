import React from 'react';
import Navbar from '../Components/Navbar'
import IntroSection from '../Components/IntroSection'
import MiddleSection from '../Components/MiddleSection'
import Challenges from '../Components/Challenges'

function MainPage()
{
  return(
    <>
    <Navbar/>
      <IntroSection/>
      <MiddleSection/>
      <Challenges/>
    </>
  )
}

export default MainPage;