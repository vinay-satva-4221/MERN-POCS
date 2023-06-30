import React from 'react';
import './App.css';
import {authApis} from "./apis/handler";

function App() {
const addUser = async () =>{
    const res = await  authApis.register({email:"paelvedf4e3r4221tuf@gmail.com",repeat_password:"veer",password:"veer",name:"veer"})
    console.log("res",res)
}
  return (
    <div className="m-5">
        <button type="button" onClick={addUser} className="btn btn-primary">Submit</button>
    </div>
  );
}

export default App;
