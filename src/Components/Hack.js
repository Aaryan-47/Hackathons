import '../styles/hack.css';
import defaultPic from '../images/Dphi-logo.png';
import {useState} from 'react';
import {Link} from 'react-router-dom'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function Hack({detail})
{
  let diff= new Date(Date.now())-new Date(detail.Start); //to check whether challenge has started
  let diff1=new Date(Date.now())-new Date(detail.End); //to check whether challenge has ended
  let diff2=(-1*diff1)%(1000*3600*24);
  let diff3=diff2%(1000*3600);
  let diff4=(-1*diff)%(1000*3600*24);
  let diff5=diff4%(1000*3600);
  const Style={
    textDecoration:"none",
    color:"black"
  }
  //console.log(days);
  //console.log(new Date(Date.now())-new Date(detail.Start))
  return(
    <>
    <div className="post">
        <img className="postImg" src={detail.Image} alt=""/>
        <br></br>
        <div className="postDate">
          {diff>0 && diff1<0 ?<div className="Active">Active</div>:diff<0?<div className="Upcoming">Upcoming</div>:<div className="Past">Past</div>}
        </div>
        <div className="postTitle">
          <Link style={Style} to ={`/${detail.id}`}>
            {detail.Name}
          </Link>
        </div>
        <div className="Time">
          {diff1>0 ?<div className="QQQ"> <div className="TimeHeading">Ended on:</div> <div className="endDate">{new Date(`${detail.End}`).toDateString()}</div></div>:""}
          {diff>0&&diff1<0 ? <div className="QQ"><div className="TimeHeading">Ends in:</div> <div className="remaining"> {Math.floor((diff1*-1)/(1000*3600*24))} : {Math.floor(diff2/(1000*3600))} : {Math.floor(diff3/(1000*60))}</div></div>:""}
          {diff<0 ? <div className="Q"><div className="TimeHeading">Starts in:</div><div className="remaining"> {Math.floor((diff*-1)/(1000*3600*24))} : {Math.floor(diff4/(1000*3600))} : {Math.floor(diff5/(1000*60))}</div></div>:""}
          {((diff>0&&diff1<0)||diff<0) ? <div className="Datremaining">Days    Hours    Mins</div> : ""}
        </div>
        <br></br>
        <br></br>
        <button className="button5">{<TaskAltIcon/>} Participate Now</button>
    </div>
    </>
  )
}

export default Hack;