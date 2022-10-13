import React from 'react';
import '../styles/challenges.css';
import {db} from '../firebase-config';
import {useState,useEffect} from 'react';
import {
    collection,
    getDocs,
    query,
    where,
    orderBy
}  from 'firebase/firestore'
import Hack from '../Components/Hack.js';
import { getButtonUnstyledUtilityClass } from '@mui/base';

function Challenges()
{
    const [check,setcheck]=useState(1)
    const[hacks,sethacks]=useState([]);
    const [level,setlevel]=useState("easy")
    const [menuVal,setmenuVal]=useState("All");
    const [nameQuery,setnameQuery]=useState("AA");
    const [date,setdate]=useState(new Date().toISOString().split('T')[0])
    const HackRef=collection(db,"hackathons")
    useEffect(()=>{
        const gethacks=async ()=>{
          const data=await getDocs(HackRef);
          sethacks(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }
        const getlevels=async ()=>{
            const q= query(HackRef, where("Level","==",`${level}`))
            console.log(level)
            const querySnapshot = await getDocs(q);
            sethacks(querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }
        const getPast=async ()=>{
            const q= query(HackRef, where("End","<",`${date}`));
            const querySnapshot= await getDocs(q);
            console.log(q);
            sethacks(querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }

        const getUpcoming= async ()=>{
            const q= query(HackRef, where("Start",">",`${date}`));
            const querySnapshot= await getDocs(q);
            console.log(q);
            sethacks(querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }

        const getActive= async ()=>{
            const q= query(HackRef, where("End",">",`${date}`),where("End","!=",`${date}`));
            const querySnapshot= await getDocs(q);
            console.log(q);
            sethacks(querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }

        const getByName=async ()=>{
            const q= query(HackRef, where("Name","==",`${menuVal}`));
            const querySnapshot= await getDocs(q);
            console.log(menuVal);
            sethacks(querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }

        const getByNew=async ()=>{
            const q= query(HackRef, orderBy("End","asc"));
            const querySnapshot= await getDocs(q);
            console.log(q);
            sethacks(querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }

        const getByOld = async ()=>{
            const q= query(HackRef, orderBy("End","desc"));
            const querySnapshot= await getDocs(q);
            console.log(menuVal);
            sethacks(querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }
        if(menuVal==="All"||menuVal===""){
        gethacks();
        }
        else if(menuVal==="easy"||menuVal==="medium"||menuVal==="hard")
        {
            if(menuVal==="easy")
            setlevel("easy")
            else if(menuVal==="hard")
            setlevel("hard")
            else
            setlevel("medium")
            getlevels()
        }
        else if(menuVal==="upcoming")
        {
            getUpcoming();
        }
        else if(menuVal==="past")
        {
            getPast();
        }
        else if(menuVal==="active")
        {
            getActive();
        }
        else if(menuVal==="new")
        {
          getByNew();
        }
        else if(menuVal==="old")
        {
          getByOld();
        }
        else if(menuVal==="New")
        {
            getByNew();
        }
        else if(menuVal==="Old")
        {
            getByOld();
        }
        else 
        {
            getByName();
        }
    },[menuVal,level])
     console.log(menuVal);

   return (
    <>
    <div className="Title">
        <div className="titleBox">
        Explore Challenges
        </div>
        <div className="search">
            <div className="search-container">
     <input className="searchbox"type="text" placeholder="Search Here" onChange={(e)=>setmenuVal(e.target.value)}/>
     </div>
     <select value={menuVal} onChange={(e)=>setmenuVal(e.target.value)} className="custom-select">
        <option selected value="">Filter</option>
        <option value="All">All</option>
        <optgroup label="Sort By">
        <option value="New">Newest First</option>
        <option value="Old">Oldest First</option>
        </optgroup>
        <optgroup label="Difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        </optgroup>

        <optgroup label="Status">
        <option value="upcoming">Upcoming</option>
        <option value="past">Past</option>
        <option value="active">Active</option>
        </optgroup>
     </select>
    </div>
    </div>
    
  
    <div className="hacks">
        {hacks.map((b)=>(
          <Hack detail={b}/>
        ))}
    </div>
    </>
   )
}

export default Challenges;