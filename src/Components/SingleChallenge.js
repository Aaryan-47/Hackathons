import React from 'react';
import {useLocation} from 'react-router';
import {getDoc, doc,updateDoc, deleteDoc} from 'firebase/firestore';
import {useState,useEffect} from 'react';
import {db} from '../firebase-config';
import Navbar from '../Components/Navbar'
import '../styles/SingleChallenge.css';
import {Link} from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import SignalCellular3BarIcon from '@mui/icons-material/SignalCellular3Bar';

function SingleChallenge()  
{
  const loc=useLocation().pathname;
  const id=loc.slice(1);
  //console.log(id);
  const SingleHackRef=doc(db,"hackathons",`${id}`)
  const [HackInfo,setHackInfo]=useState({Description:{stringValue:""},Name:{stringValue:""},Image:{stringValue:""},Level:{stringValue:""},Start:{stringValue:""},End:{stringValue:""}})
  useEffect(()=>{
    const getHack=async ()=>{
      await getDoc(SingleHackRef).then((res)=>setHackInfo(res._document.data.value.mapValue.fields));
    }
    getHack()
    
  },[])

  const [update,setupdate]=useState(true);
    

  

  const deleteUser = async () => {
    const userDoc = doc(db, "hackathons", `${id}`);
    await deleteDoc(userDoc);
    window.location.replace('/');
  };


  console.log(HackInfo)
  return(
    <>
    <>  <Navbar/>
    <div className="PostHeading">
      <div className="PostDate">
        <div className="Date">
          <br></br>
          {<AccessTimeIcon/>}Start-Date:{new Date(HackInfo.Start.stringValue).toDateString()}<br></br><br></br>
          {<HourglassTopIcon/>}End-Date: {new Date(HackInfo.End.stringValue).toDateString()}
        </div>
      </div>
      
      <div className="PostTitle">
        {HackInfo.Name.stringValue}
      </div>
      <div className={HackInfo.Level.stringValue}>
       <div className="level">
       {HackInfo.Level.stringValue}
       </div>
        </div>
    </div>
    <div className="box9">
      <div className="overview">
        Overview
      </div>
      <div className="underline"></div>
      <Link to={`/update/${id}`} >
      <button className="buttonEdit" onClick={()=>setupdate(false)}>Edit</button></Link>
      <button className="buttondel" onClick={deleteUser}>Delete</button>
    </div>
    <div className="descriptionBox">
      {HackInfo.Description.stringValue}
    </div>
    </>
    
    </>
  )
}

export default SingleChallenge

