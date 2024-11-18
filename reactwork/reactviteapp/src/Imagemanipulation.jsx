import React, { useState } from 'react'
import cat from './cat.png';

function Imagemanipulation() {

  const[height,setHeight]=useState(100);
  const[width,setWidth]=useState(100);
  const[rotateImg,setRotate]=useState(0);
  const [bgColor, setBgColor] = useState('#432E54');

  function enhanceHeight(){
    setHeight(height+30);
  }

  function enhanceWidth(){
    setWidth(width+30);
  }

  function rotateImage(){
    setRotate(rotateImg+30);
  }

  function changeBgColor() {
    const colors = ['#432E54', '#FFD700', '#32CD32', '#1E90FF', '#FF6347']; // List of colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  }


  return (
    <div style={{border:'2px solid red',height:"300px" , width:"400px",marginLeft:"550px", backgroundColor:'#9694FF'}}>
    <div style={{marginLeft:"150px", marginTop:"90px",  backgroundColor:"#432E54", height:"100px", width:"100px", border:"1px solid black"}}>
      <img src={cat} style={{transform:`rotate(${rotateImg}deg)`}} height={height} width={width} alt="cat image" />
    </div>

    <div style={{marginTop:"10px"}}>
        <button id="btn" onClick={enhanceHeight}>EnhanceHeight</button>
        <button id="btn" onClick={enhanceWidth}>EnhanceWidth</button>
        <button id="btn" onClick={rotateImage}>Rotate</button>
        <button id="btn" onClick={changeBgColor}>Change Background</button>
    </div>

    </div>
  )
}

export default Imagemanipulation