import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../styles/MiddleSection.css';
import NoteBookLogo from '../images/notebook.svg';
import VectorLogo from '../images/Vector.svg';
import RobotsLogo from '../images/robots.svg';
import IdentityLogo from '../images/IdentificationCard.svg';

function MiddleSection()
{
  return(
    <>
    <Box sx={{flexgrow:1}}>
     <Grid container spacing={2}>
        <Grid item xs={12} className="heading">
         <div className="title">
            Why Participate in AI Challenges ?
         </div>
        </Grid>
        <Grid item xs={12} className="contents">
         <div className="box1">
          <div className="img1">
            <img src={NoteBookLogo} alt=""></img>
          </div>
          <div className="heading1">
            Prove your Skills
          </div>
          <div className="desc1">
            Gain substantial experience by solving real world problems and Pit against
            others to come up with innovative solutions.
          </div>
         </div>
         <div className="box2">
         <div className="img1">
            <img src={VectorLogo} alt=""></img>
          </div>
          <div className="heading1">
            Learn
          </div>
          <div className="desc1">
           One can look and analyze the solutions submitted by the
           other data scientists in the community and learn from them.
          </div>
         </div>
         <div className="box3">
         <div className="img1">
            <img src={RobotsLogo} alt=""></img>
          </div>
          <div className="heading1">
            Challenge Yourself
          </div>
          <div className="desc1">
           There is nothing for you to lose when participating in a Challenge
           .You can fail safe and learn out of the entire experience and
           bounce back harder.
          </div>
         </div>
         <div className="box4">
         <div className="img1">
            <img src={IdentityLogo} alt=""></img>
          </div>
          <div className="heading1">
            Earn Recognition
          </div>
          <div className="desc1">
            You will stand out from the crowd if you do well in AI
            challenges, it not only helps you shine in the community but also
            earn rewards
          </div>
         </div>
        </Grid>
     </Grid>
    </Box>

    </>
  )
}


export default MiddleSection;