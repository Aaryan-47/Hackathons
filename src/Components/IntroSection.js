import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../styles/IntroSection.css';
import Rocket from '../images/Rocket.svg';
import AILogo from '../images/AI.svg';
import DataScienceLogo from '../images/Data-Science.svg';
import RobotLogo from '../images/Robot.svg';
import {Link} from 'react-router-dom';

function IntroSection()
{
  return(
    <>
    <Box sx={{flexgrow:1}}>
      <Grid  className="container"container spacing={2}>
       <Grid item xs={8}>
        <div className="headingContainer">
           Accelerate Innovation With Global AI Challenges
        </div>
        <div className="textContainer">
           AI Challenges at Dphi simulate real-world problems. It is a
           great place to put your AI/Data Science skills to test on
           diverse datasets allowing you to foster learning through
           competitions.
        </div>
       </Grid>
       <Grid item xs={4}>
        <div className="imgContainer">
        <img className="img" src={Rocket} alt=""></img>
        </div>
       </Grid>
      </Grid>
      <Grid className="container2" container spacing={2}>
        <Grid item xs={12}>
           <Link to="/create"><button className="button1">Create Challenge</button></Link>
        </Grid>
      </Grid>
    </Box>

    <Box>
     <Grid  className="container3" container spacing={2}>
       <Grid item xs={4} className="submissions">
        <div className="iconImg"><img src={AILogo}></img> </div>
         <div className="textI">100K +</div>
         <div className="textsmall">AI Model Submissions</div>
       </Grid>
       <Grid item xs={4} className="submissions">
         <div className="iconImg1"><img src={DataScienceLogo}></img> </div>
         <div className="textI1">50K +</div>
         <div className="textsmall1">Data Scientists</div>
       </Grid>
       <Grid item xs={4} id="C" className="submissions">
         <div className="iconImg2"><img src={RobotLogo}></img> </div>
         <div className="textI2">100 +</div>
         <div className="textsmall2">AI Challenges Hosted</div>
       </Grid>
     </Grid>
    </Box>
    </>
  )
}

export default IntroSection;