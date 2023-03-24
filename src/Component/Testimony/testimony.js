import React, { useState } from 'react'
import {Questions, Testi} from "../../Data"
import Testimg from '../../Assets/Testimony.svg'
import {db} from "../../firebase"
import "./Testimony.css"

const Testimony = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [input ,setInput] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();

    db.collection("Registration form")
    .add({
    name:name,
    email:email,
    phone:phone,
    input:input,
  })
  .then(()=>{
    alert("Your registration has been submitted");
  } 
  )

  .catch((error)=>{
    alert(error.message);
  })

  setName("");
  setEmail("");
  setPhone("");
  setInput("");
  };
  
  console.log(db);


  return (
    <div className='Testimony'>
      <p className='Testimony_text'>TESTIMONIALS</p>
      <div className='Testimony_flex'>
      {Testi.map(Info =>{
        return(
          <div className='Testimony_border'>
            <p className='Testimonytext'>{Info.testimony}</p>
            <p className='Testimonyname'>{Info.name}</p>
            <p className='Testimonypost'>{Info.post}</p>
          </div>
        )
      })}
      </div>
      <div>
        <p className='Testimony_question'>Frequently Asked Questions</p>
        <div className='Questions_flex'>
        {Questions.map(Info =>{
        return(
          <div className='Questions_border'>
            <p className='Questions_text'>{Info.question}</p>
          </div>
        )
      })}
        </div>
      </div>
      <div className='Register'>
        <p className='Testimony_register'>Register Here</p>
        <div className='Register_flex'>
          <div>
            <img src={Testimg} alt="" style={{marginLeft:"18%"}}/>
          </div>
          
          <div style={{marginLeft:"10%"}}> 
          <form onSubmit={handleSubmit}>
            <p>Name</p>
            <input type="text" className='Register_input' style={{marginTop:'-30%'}} value={name} onChange={(e)=> setName(e.target.value)}/>
            <p>Email</p>
            <input type="text" className='Register_input'style={{marginTop:'-30%'}} value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <p>Phone Number</p>
            <input type="tel" className='Register_input' style={{marginTop:'-30%'}} value={phone} onChange={(e)=> setPhone(e.target.value)}/>
            <p>What Stack Are You Interested In?</p>
            <div className='Register_stack'>
              <p className='Register_mobile'>Mobile Deveopment</p>
              <p className='Register_data'>Data Analysis</p>
            </div>
            <div>
              <p>Do You Have Any Knowledge Of The Stack?</p>
              <div className='Register_level'>
                <p className='Register_beginner'>Beginner</p>
                <p className='Register_intermediate'>Intermediate </p>
              </div>
            </div>
            <div>
              <p>How Did You Hear About Us?</p>
              <input type="text" className='Register_input' style={{marginTop:'-30%'}} value={input} onChange={(e)=> setInput(e.target.value)}/>
            </div>
            <button className='Register_button' type='submit'>Submit</button>
           
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimony