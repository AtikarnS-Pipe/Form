import { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [email,setEmail] = useState("");
  const [institute,setInstitute] = useState("");
  const [occupation,setOccupation] = useState("");

  const addComments = () => {
    axios.post('http://localhost:3001/create',{
      email: email,
      institute: institute,
      occupation: occupation
    })
  }
  return (
    <div>
      <h1>Interested?</h1>
      <h3 className='one'>Fill in your email address <br/>
        we will develop as fast as we can for <br/>
         early adopters like you</h3>
         <form action="Email"><input 
         type="text" 
         placeholder='Email' 
         className='one'
         onChange={(event)=>{
          setEmail(event.target.value)
         }}
         />
         </form>
         <section className='Container'>
            <form action="Institute"><input 
            type="text" 
            placeholder='Institute' 
            className='two'
            onChange={(event)=>{
              setInstitute(event.target.value)
             }}
            />
            </form>
            <form action="Occupation"><input 
            type="text" 
            placeholder='Occupation' 
            className='three'
            onChange={(event)=>{
              setOccupation(event.target.value)
             }}
            />
            </form>
         </section>
         <button onClick={addComments}><h4>Send</h4></button>
    </div>
  )
}

export default App
