import '../styles/hack.css';
import defaultPic from '../images/Dphi-logo.png';
import {useState} from 'react';
import {Link} from 'react-router-dom'

function Hack({detail})
{
  let diff= new Date(Date.now())-new Date(detail.Start); //to check whether challenge has started
  let diff1=new Date(Date.now())-new Date(detail.End); //to check whether challenge has ended
  let diff2=(-1*diff1)%(1000*3600*24);
  let diff3=diff2%(1000*3600);
  let diff4=(-1*diff)%(1000*3600*24);
  let diff5=diff4%(1000*3600);
  //console.log(days);
  //console.log(new Date(Date.now())-new Date(detail.Start))
  return(
    <>
    <div className="post">
        <img className="postImg" src={detail.Image} alt=""/>
        <div className="postDate">
          {diff>0 && diff1<0 ?<div className="Active">Active</div>:diff<0?<div className="Upcoming">Upcoming</div>:<div className="Past">Past</div>}
        </div>
        <div className="postTitle">
          <Link to ={`/${detail.id}`}>
            {detail.Name}
          </Link>
        </div>
        <div className="Time">
          {diff1>0 ?<div className="QQQ"> Ended on: {`${detail.End}`}</div>:""}
          {diff>0&&diff1<0 ? <div className="QQ">Ends in: {Math.floor((diff1*-1)/(1000*3600*24))} Days-{Math.floor(diff2/(1000*3600))}hours- {Math.floor(diff3/(1000*60))}minutes</div>:""}
          {diff<0 ? <div className="Q">Starts in: {Math.floor((diff*-1)/(1000*3600*24))} Days-{Math.floor(diff4/(1000*3600))}hours- {Math.floor(diff5/(1000*60))}minutes</div>:""}
        </div>
        <br></br>
        <br></br>
        <button className="button5">Participate Now</button>
    </div>
    </>
  )
}

export default Hack;