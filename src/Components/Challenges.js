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
    const [menuVal,setmenuVal]=useState("all");
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
        if(nameQuery!=="AA")
        {
            console.log("AAA");
            getByName();
        }
        else{
        if(check===1){
        gethacks();
        }
        else if(check===2)
        {
            getlevels()
        }
        else if(check===3)
        {
            getUpcoming();
        }
        else if(check===4)
        {
            getPast();
        }
        else if(check===5)
        {
            getActive();
        }
        else if(check==6)
        {
          getByNew();
        }
        else if(check===7)
        {
          getByOld();
        }
        else if(check===8)
        {
            getByName();
        }
    }
    },[check,level])
     console.log(menuVal);

     const handle=()=>{
        if(menuVal==="All")
        {
            setcheck(1);
        }
        else if(menuVal==="New")
        {
            setcheck(6);
        }
        else if(menuVal==="Old")
        {
            setcheck(7);
        }
       else if(menuVal==="easy")
       {
          setlevel("easy");
          setcheck(2);
       }
        else if(menuVal==="medium")
       {
        setlevel("medium")
        setcheck(2)
       }
       else if(menuVal==="hard")
       {
        setlevel("hard");
        setcheck(2);
       }
       else if(menuVal==="upcoming")
       {
        setcheck(3);
       }
       else if(menuVal==="past")
       {
        setcheck(4);
       }
       else if(menuVal==="active")
       {
        setcheck(5);
       }
       else
       {
        setcheck(8);
       }
     }
   return (
    <>
    <div className="Title">
        Explore Challenges
    </div>
    <div className="search">
     <input className="searchbox"type="text" placeholder="Search Here" onChange={(e)=>setmenuVal(e.target.value)}/>
     <select value={menuVal} onChange={(e)=>setmenuVal(e.target.value)} className="custom-select">
        <option value="All">All</option>
        <option className="sort">Sorting</option>
        <option value="New">Newest First</option>
        <option value="Old">Oldest First</option>
        <option className="difficulty">Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        <option className="status">Status</option>
        <option value="upcoming">Upcoming</option>
        <option value="past">Past</option>
        <option value="active">Active</option>
     </select>
     <button className="button4" onClick={handle}>GO</button>
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