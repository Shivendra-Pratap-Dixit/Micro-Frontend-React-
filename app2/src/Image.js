import React from 'react';
import "./styles.css";
function Image() {

  return (
    <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <h1 style={{fontFamily:"cursive", fontSize:"20px"}}>This is from App 2</h1>
    <img src='https://freesvg.org/img/lemmling-Cartoon-elephant.png' style={{animation: "shake 1s infinite alternate",width:"200px"}} className='shake'/>
    </div>
  )
}

export default Image;