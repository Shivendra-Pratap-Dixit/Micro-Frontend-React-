import React from 'react';
import "./styles.css";
function Button() {

  return (
    <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <h1 style={{fontFamily:"cursive", fontSize:"20px"}}>This is from App 1</h1>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cartoon_Meditating_Man.svg/239px-Cartoon_Meditating_Man.svg.png' style={{animation: "shake 1s infinite alternate"}} className='shake'/>
    </div>
  )
}

export default Button