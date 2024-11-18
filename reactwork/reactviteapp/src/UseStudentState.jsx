import React, { useState } from 'react'

function UseStudentState() {
    const [count, setCount] = useState(20);
    function doIncrement(){
        console.log("Do Increment")
        setCount(count+10);
    }
    function doDecrement(){
        console.log("Do Increment")
        setCount(count-5);
    }
    return (
        <>
        <div style={{color:'red', border:'2px solid red', width:'200px', height:'400px', marginLeft:'500px',backgroundColor:'RGB(120,200,180)',fontSize:'50px'}}>{count}
        
        <div>

        <button id='btn' onClick={doIncrement} style={{backgroundColor:'#F34CCD', marginTop:'20px'}}>Increment Counter</button>
        &nbsp;&nbsp;
        <button id='btn' onClick={doDecrement} style={{backgroundColor:'#F34CCD', marginTop:'20px'}}>Decrement Counter</button>
        </div>

        </div>

        </>
    );
}

export default UseStudentState