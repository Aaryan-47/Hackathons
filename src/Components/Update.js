import Navbar from '../Components/Navbar';
import {useLocation} from 'react-router';
import {db} from '../firebase-config';
import {useState,useEffect} from 'react';
import {doc,updateDoc,getDoc} from 'firebase/firestore';

function Update()
{
    const id=useLocation().pathname.split('/')[2];
  console.log(id);

  const [HackInfo,setHackInfo]=useState({Description:{stringValue:""},Name:{stringValue:""},Image:{stringValue:""},Level:{stringValue:""},Start:{stringValue:""},End:{stringValue:""}})
  const [names,setnames]=useState("");
  const[descs,setdescs]=useState("");
  const[levels,setlevels]=useState("");
  const[starts,setstarts]=useState("");   
  const[ends,setends]=useState("");      
  const SingleHackRef=doc(db,"hackathons",`${id}`)

  const Update=async ()=>{
    const userDoc= doc(db,"hackathons",`${id}`);
    //e.preventDefault();
    try{
    if(names!==""){
      await updateDoc(userDoc,{Name:names});
    }
    else
    {
      await updateDoc(userDoc,{Name:HackInfo.Name.stringValue})
    }
    if(descs!=="")
    {
      console.log(descs)
      await updateDoc(userDoc,{Description:descs});
    }
    else
    {
      await updateDoc(userDoc,{Description:HackInfo.Description.stringValue});
    }
    if(starts!=="")
    {
      await updateDoc(userDoc,{Start:starts})
    }
    else
    {
      await updateDoc(userDoc,{Start:HackInfo.Start.stringValue})
    }
    if(ends!=="")
    {
      await updateDoc(userDoc,{End:ends})
    }
    else
    {
      await updateDoc(userDoc,{End:HackInfo.End.stringValue})
    }
    if(levels!=="")
    {
      await updateDoc(userDoc,{Level:levels});
    }
    else
    {
      await updateDoc(userDoc,{Level:HackInfo.Level.stringValue})
    }
  
   }
   catch(err)
   {
      console.log(err);
   }
   window.alert("Update Succesful. Go Back to view the changes")
}

   
   useEffect(()=>{
    const getHack=async ()=>{
      await getDoc(SingleHackRef).then((res)=>setHackInfo(res._document.data.value.mapValue.fields));
    }
    getHack()
    
  },[])


 return (<>
    (<><Navbar/>
      <div className="HeadingBox">
         <div className="Heading">
            Update a challenge
         </div>
      </div>
      <div className="Form">
         <div className="formheading1">
            Challenge Name
            </div>
      <input type="text"placeholder={HackInfo.Name.stringValue} onChange={(e)=>setnames(e.target.value)}/>
       <div className="formheading2"> Start Date</div>
      
      <input type="date"  placeholder={HackInfo.Start.stringValue}className="start_date"onChange={(e)=>setstarts(e.target.value)}/>
      <div className="formheading3">End Date</div>
      
      <input className="end_date"type="date" value={HackInfo.End.stringValue}onChange={(e)=>setends(e.target.value)}/>
      <div className="formheading4">Description</div>

      <textarea className="description"
        type="text"  placeholder={HackInfo.Description.stringValue}onChange={(e)=>setdescs(e.target.value)}/>
      <div className="formheading5"> Choose Difficulty</div>
     
      <select onChange={(e)=>setlevels(e.target.value)} className="menu">
         <option value="easy">Easy</option>
         <option value="medium">Medium</option>
         <option value="hard">Hard</option>
      </select>

      <button className="button" onClick={Update}>Update Changes</button>
    </div></>) 
 </>)
}

export default Update;