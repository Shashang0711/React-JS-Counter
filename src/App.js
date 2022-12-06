// // import { useState } from 'react'
// // import React from 'react'
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   const [data, setData] = useState("Shashang")
// //   function updateData() {
// //     setData("Tandel")
// //   }
// //   return (
// //     <div className="App">
// //       <h1>{data}</h1>
// //       <button onClick={updateData}>Update Data</button>
// //     </div>
// //   );
// // }

// // export default App;


// // import React from 'react'
// // import './App.css';

// // function App() {
// //   const [data, setData] = useState(0)
// //   function updateData() {
// //     setData(data + 1)
// //   }
// //   return (
// //     <div className='App'>
// //       <h1>{data}</h1>
// //       <button onClick={updateData}>Update Data</button>
// //     </div>
// //   )
// // }
// // export default App;


// import React, { Component } from 'react'
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Shashang"
//     }
//   }
//   apple() {
//     this.setState({ name: "Tandel" })
//   }
//   render() {

//     return (
//       <div className='App' >
//         <h1>{this.state.name}</h1>
//         <button onClick={() => this.apple()}>Update</button>
//       </div>
//     );
//   }
// }
// export default App;





import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index";

function App() {

  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const data = [
    {
      Username: "Shashang",
      Password: "Tandel"
    },
    {
      Username: "Shubham",
      Password: "Damania"
    }
  ];

  const error = {
    uname: "Invalid Username",
    pass: "Invalid Password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = data.find((user) => user.Username === uname.value);

    if (userData) {
      if (userData.Password !== pass.value) {
        setErrorMessage({ name: "pass", message: error.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessage({ name: "uname", message: error.uname });
    }
  }

  const renderErrorMessage = (name) =>
    name === errorMessage?.name && (
      <div className="error">{errorMessage.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input type="text" name="uname" autoComplete="off" required></input>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" name="pass" autoComplete="off" required></input>
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" ></input>
        </div>
      </form >
    </div >
  );

  return (
    <div className="app" >
      <div className="login-form">
        <div className="title">Sign in</div>
        {isSubmitted ? <div>Successfully login </div> : renderForm}
      </div>

    </div >
  );
}
export default App;

// import React, { useState } from "react";
// import Student from "./Student";


// function App() {
//   const [name, setName] = useState("Shashang")
//   return (
//     <div className="App">
//       <h1>Props</h1>
//       <Student name={name} />
//       <button onClick={() => { setName("Tandel") }}>Update </button>
//     </div>
//   )
// }
// export default App;

// import Student from "./Student";
// import "./App.css"

// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Shashang"
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Props</h1>
//         <Student name={this.state.name} email="Shashangtandel143@gmail.com"></Student>
//         <button onClick={() => this.setState({ name: "Tandel" })}>Update</button>
//       </div>
//     )
//   }
// }
// export default App;

// import "./App.css"
// import React, { useState } from "react"
// function App() {
//   const [data, setData] = useState(null)
//   const [print, setPrint] = useState(false)
//   function getdata(val) {
//     console.log(val.target.value);
//     setData(val.target.value)
//     setPrint(false)
//   }
//   return (
//     <div className="App">
//       {
//         print ?
//           <h1>{data}</h1>
//           : null
//       }
//       <input type="text" onChange={getdata}></input>
//       <button onClick={() => setPrint(true)}>Print</button>
//     </div>
//   )
// }
// export default App;




// import "./App.css"
// import React from "react";
// function App() {
//   const [status, setStatus] = React.useState(true)
//   return (
//     <div className="App">
//       {
//         status ? <h1>Hello World</h1> : null
//       }

//       <button onClick={() => setStatus(false)}>Hide</button>
//       <button onClick={() => setStatus(true)}>Show</button>

//       <button onClick={() => setStatus(!status)}>Toggle</button>

//     </div >
//   );
// }

// export default App;


// import "./App.css"
// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("")
//   const [TnC, setTnC] = useState(false)
//   const [interest, setInterest] = useState("")


//   function getFormData(e) {
//     console.log(name, TnC, interest);
//     e.preventDefault()
//   }
//   return (
//     <div className="App">
//       <h1>Form in React</h1>
//       <form onSubmit={getFormData}>
//         <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}></input><br></br><br></br>
//         <select onChange={(e) => setInterest(e.target.value)}>
//           <option>Select option</option>
//           <option>POTC</option>
//           <option>HP</option>
//           <option>FAF</option>
//         </select>
//         <br></br><br></br>
//         <input type="checkbox" onChange={(e) => setTnC(e.target.checked)}></input><span>Accept Terms and Condition</span>
//         <br></br><br></br>
//         <button type="submit" >Submit</button>

//       </form >
//     </div >
//   )
// }
// export default App;


import './App.css'
import Counter from './Counter';
import Profile from "./Profile"

function App() {
  return (
    < div className="App" >
      {/* <Profile /> */}
      <Counter />
    </div >
  )
}
export default App;
