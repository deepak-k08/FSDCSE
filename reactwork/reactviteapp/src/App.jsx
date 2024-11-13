import React from 'react'
import Student from './Student';

function App() {

  const h1=<h1> Hello World</h1>;
  const  myStyle={
    color:'red',
    backgroundColor:'yellow'
  }

  return (
    <div style={{backgroundColor :'Cyan'}} >
      {h1}

      <div style={myStyle}>
        ABES Engineering College
      </div>
      <div>
        <Student 
        pic = {<img src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png" height = {100} width = {100} />}
        college="ABES Enigineering College"
        name="Deepak"
        branch="CSE"
        section="B"
        roll="230032010"
        />        
      </div>
      <div>

      <Student 
        pic = {<img src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png" height = {100} width = {100} />}
        college="ABES Enigineering College"
        name="Kapil"
        branch="CSE"
        section="B"
        roll="230032011 "
        />        
      </div>

      
    </div>
  )
}

export default App