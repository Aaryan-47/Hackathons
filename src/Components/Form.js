import React from 'react';
import Navbar from '../Components/Navbar';
import '../styles/Form.css';
import {useState} from 'react';
import {db} from '../firebase-config';
import{
   collection,
   addDoc,
   updateDoc
} from 'firebase/firestore';

import{ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid';
import { storage } from "../firebase-config";

function Form()
{
const [name,setname]=useState("MM");
const[desc,setdesc]=useState("");
const[level,setlevel]=useState("easy");
const[start,setstart]=useState(Date.now());   
const[end,setend]=useState(Date.now());   
const[link,setlink]=useState("yy");
const hackathonRef= collection(db,"hackathons")
const[file,setfile]= useState(null);


 const createHackathon=async ()=>{
   
   try{
      if(file !== null)
      {
        const imageRef=ref(storage,`/images/${file.name + v4()}`);
        console.log(imageRef);
       
        
        uploadBytes(imageRef, file).then(()=>{
         getDownloadURL(imageRef).then((url)=>{
            addDoc(hackathonRef,{Name:name,Description:desc,Start:start,End:end,Image:url,Level:level})
            window.alert("Succesfully create Hackathon");
            })
            .catch((err)=>{
             console.log(err);
            })
        })
        console.log(link);
      
      }
      else
      {
         await addDoc(hackathonRef,{Name:name,Description:desc,Start:start,End:end,Image:link,Level:level})
         window.alert("Succesfully created Hackathon");
      }
    
   //await updateDoc(hackathonRef,{Image:link})
    
   }
   catch(err)
   {
      console.log(err);
   }
   
 }
 //createHackathon();
   return(
    <>
      <Navbar/>
      <div className="HeadingBox">
         <div className="Heading">
            Challenge Details
         </div>
      </div>
      <div className="Form">
         <div className="formheading1">
            Challenge Name
            </div>
      <input type="text" onChange={(e)=>setname(e.target.value)}/>
     
       <div className="formheading2" > Start Date</div>
      
      <input type="date"  className="start_date"onChange={(e)=>setstart(e.target.value)}/>
      <div className="formheading3">End Date</div>
      
      <input className="end_date"type="date" onChange={(e)=>setend(e.target.value)}/>
      <div className="formheading4">Description</div>

      <textarea className="description"
        type="text"  onChange={(e)=>setdesc(e.target.value)}/>
      <div className="formheading5"> Choose Difficulty</div>
     
      <select value={level} onChange={(e)=>setlevel(e.target.value)} className="menu">
         <option value="easy">Easy</option>
         <option value="medium">Medium</option>
         <option value="hard">Hard</option>
      </select>

      <input type="file" onChange={(e)=>setfile(e.target.files[0])} className="upload"/>
      <button className="button" onClick={createHackathon}>Save Changes</button>
    </div>
    </>
   )
}

export default Form;