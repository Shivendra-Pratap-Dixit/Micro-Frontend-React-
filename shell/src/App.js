import React from 'react'
const ButtonFromApp1 = React.lazy(() => import("app1/Button"));
const ImageFromApp2 = React.lazy(() => import("app2/Image"));


const App = () => {
  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",fontFamily:"cursive", fontSize:"20px"}}>
      Shell App Has Started
      
      <ButtonFromApp1/>
      <ImageFromApp2/>
      </div>
  )
}

export default App