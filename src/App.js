import React from 'react';
import MainPage from './Components/MainPage'
import Form from './Components/Form';
import SingleChallenge from './Components/SingleChallenge';
import {BrowserRouter, Route , Routes} from 'react-router-dom';


function App()
{
    return(
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/create" element={<Form/>}/>
      <Route path="/:challengeID" element={<SingleChallenge/>}/>
    </Routes>
  </BrowserRouter>
    </>
    )
}



export default App;

