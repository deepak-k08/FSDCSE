import React, { useState } from 'react'
import cat from './cat.png';

function Imagemanipulation() {

  const[height,setHeight]=useState(100);
  const[width,setWidth]=useState(100);
  const[rotateImg,setRotate]=useState(0);
  const[red,setRed]=useState();
  const[green,setGreen]=useState();
  const[blue,setBlue]=useState();

  function enhanceHeight(){
    setHeight(height+30);
  }

  function enhanceWidth(){
    setWidth(width+30);
  }

  function rotateImage(){
    setRotate(rotateImg+30);
  }

  function setColor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
}



  return (
    <div style={{border:'2px solid red',height:"300px" , width:"400px",marginLeft:"550px", backgroundColor:'#9694FF'}}>
    <div style={{marginLeft:"150px", marginTop:"90px", backgroundColor:`rgb(${red},${green},${blue})`, height:"100px", width:"100px", border:"1px solid black"}}>
      <img src={cat} style={{transform:`rotate(${rotateImg}deg)`}} height={height} width={width} alt="cat image" />
    </div>

    <div style={{marginTop:"10px"}}>
        <button id="btn" onClick={enhanceHeight}>EnhanceHeight</button>
        <button id="btn" onClick={enhanceWidth}>EnhanceWidth</button>
        <button id="btn" onClick={rotateImage}>Rotate</button>
        <button id="btn" onClick={setColor}>Change Background</button>

    </div>

    </div>
  )
}

export default Imagemanipulation