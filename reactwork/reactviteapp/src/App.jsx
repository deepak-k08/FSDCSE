import React from 'react'
import Student from './Student';
import UseStudentState from './UseStudentState';
import Imagemanipulation from './Imagemanipulation';
import MyUseEffect from './MyUseEffect';
import UseFetchAPI from './UseFetchAPI';
import Login from './Login';

function App() {

  const h1 = <h1>Hello World</h1>;
  const myStyle = {
    color: 'red',
    backgroundColor: 'yellow'
  };

  // Sample data for students (uncomment if needed)
  // const studentData = [
  //   {
  //     college: "ABES Engineering College",
  //     pic: <img src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png" height={100} width={100} />,
  //     name: "Deepak",
  //     branch: "CSE",
  //     roll: 230032010,
  //     section: "B"
  //   },
  //   {
  //     college: "ABES Engineering College",
  //     pic: <img src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png" height={100} width={100} />,
  //     name: "Kuldeep",
  //     branch: "CSE",
  //     roll: 230032011,
  //     section: "B"
  //   },
  //   {
  //     college: "ABES Engineering College",
  //     pic: <img src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png" height={100} width={100} />,
  //     name: "Satveer",
  //     branch: "CSE",
  //     roll: 230032012,
  //     section: "B"
  //   }
  // ];

    return (
      <div>
        <h2>Hello Using Use State Hook</h2>
        <div>
          {/* <UseStudentState/> */}
          {/* {<Imagemanipulation/>} */}
          {/* {<MyUseEffect/>} */}
          {/* {<UseFetchAPI/>} */}
          {<Login/>}

        </div>
      </div>
    );

  // Uncomment this return block if you'd like to use the student data display.
  // return (
  //   <div style={{ backgroundColor: 'cyan' }}>
  //     {h1}
  //     <div style={myStyle}>ABES Engineering College</div>
  //     <div style={{ display: "flex" }}>
  //       {
  //         studentData.map((ele) => {
  //           return <Student data={ele} key={ele.roll} />
  //         })
  //       }
  //     </div>
  //   </div>
  // );
}

export default App;
