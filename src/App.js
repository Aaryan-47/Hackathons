import React from 'react';
import MainPage from './Components/MainPage'
import Form from './Components/Form';
import SingleChallenge from './Components/SingleChallenge';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Update from './Components/Update';

function App()
{
    return(
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/create" element={<Form/>}/>
      <Route path="/:challengeID" element={<SingleChallenge/>}/>
      <Route path="/update/:challengeID" element={<Update/>}/>
    </Routes>
  </BrowserRouter>
    </>
    )
}



export default App;

