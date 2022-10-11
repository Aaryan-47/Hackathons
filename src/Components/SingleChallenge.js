import React from 'react';
import {useLocation} from 'react-router';
import {getDoc, doc,updateDoc, deleteDoc} from 'firebase/firestore';
import {useState,useEffect} from 'react';
import {db} from '../firebase-config';
import Navbar from '../Components/Navbar'
import '../styles/SingleChallenge.css';

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
  const [names,setnames]=useState("");
const[descs,setdescs]=useState("");
const[levels,setlevels]=useState("easy");
const[starts,setstarts]=useState(Date.now());   
const[ends,setends]=useState(Date.now());   

  const Update=async ()=>{
   const userDoc= doc(db,"hackathons",`${id}`);
   const newFields= {Description: descs,Name:names,Start:starts,End:ends,Level:levels};
   await updateDoc(userDoc,newFields);
  }

  const deleteUser = async () => {
    const userDoc = doc(db, "hackathons", `${id}`);
    await deleteDoc(userDoc);
    window.location.replace('/');
  };


  console.log(HackInfo)
  return(
    <>
    {update ? (<>  <Navbar/>
    <div className="PostHeading">
      <div className="PostDate">
        <div className="Date">
          <br></br>
          Start-Date:{new Date(HackInfo.Start.stringValue).toString()}<br></br><br></br>
          End-Date: {new Date(HackInfo.End.stringValue).toString()}
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
      <button className="buttonEdit" onClick={()=>setupdate(false)}>Edit</button>
      <button className="buttondel" onClick={deleteUser}>Delete</button>
    </div>
    <div className="descriptionBox">
      {HackInfo.Description.stringValue}
    </div></>):(<><Navbar/>
      <div className="HeadingBox">
         <div className="Heading">
            Update a challenge
         </div>
      </div>
      <div className="Form">
         <div className="formheading1">
            Challenge Name
            </div>
      <input type="text" onChange={(e)=>setnames(e.target.value)}/>
     
       <div className="formheading2"> Start Date</div>
      
      <input type="date"  className="start_date"onChange={(e)=>setstarts(e.target.value)}/>
      <div className="formheading3">End Date</div>
      
      <input className="end_date"type="date" onChange={(e)=>setends(e.target.value)}/>
      <div className="formheading4">Description</div>

      <textarea className="description"
        type="text"  onChange={(e)=>setdescs(e.target.value)}/>
      <div className="formheading5"> Choose Difficulty</div>
     
      <select value="easy" onChange={(e)=>setlevels(e.target.value)} className="menu">
         <option value="easy">Easy</option>
         <option value="medium">Medium</option>
         <option value="hard">Hard</option>
      </select>

      <button className="button" onClick={Update}>Update Changes</button>
    </div></>)}
    
    </>
  )
}

export default SingleChallenge

