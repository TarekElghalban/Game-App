import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Register() {
let navigate = useNavigate()
let [ isloading , setisloading] = useState(false)
let [error , seterror] = useState('')
let [ user , setUser] = useState({
    "first_name":"",
     "last_name":"", 
     "email":"", 
     "password":"",
      "age":""
})

function getUserData(eventInfo){
let myUser = {...user}
myUser[eventInfo.target.name] = eventInfo.target.value
setUser(myUser);
};


async function sendUserDataToApi(){
let {data} = await axios.post(` https://route-egypt-api.herokuapp.com/signup`,user)
if(data.message === 'success'){
    navigate('/login')
    setisloading(false)

}
else{
    seterror(data.message)
    setisloading(false)

console.log(data.message);
}


}

function sendRegisterDataToApi(e){
    setisloading(true)
    e.preventDefault()
sendUserDataToApi()

}




  return <>
  <form  onSubmit={sendRegisterDataToApi} className='mt-lg-5 pt-lg-5'>

  <label  htmlFor='first_name' className='h3 mb-3'>First Name :</label>
  <input onChange={getUserData}  type="text" className="form-control mb-3 my-input " id="first_name" name='first_name'/>
  <label htmlFor='last_name' className='h3 mb-3'>Last Name :</label>
  <input  onChange={getUserData}  type="text" className="form-control mb-3 my-input" id="last_name" name='last_name'/>
  <label htmlFor='email' className='h3 mb-3'>Email :</label>
  <input onChange={getUserData}  type="email" className="form-control mb-3 my-input" id="email" name='email'/>
 
  <label htmlFor='password' className='h3 mb-3'>Password:</label>
  <input  onChange={getUserData} type="password" className="form-control mb-3 my-input" id="password" name='password'/>
  <label htmlFor='age' className='h3 mb-3'>Age :</label>
  <input  onChange={getUserData} type="number" className="form-control mb-3 my-input" id="age" name='age'/>
  {error? <div className="alert alert-danger">{'invalid Data'}</div>:''}
<div className='d-flex align-items-center'>
<button className='btn btn-lg btn-outline-info mt-3'>{isloading===true?<i className='fas fa-spin fa-spinner'></i>:'Register'}</button>
<Link to='/'><p className='mt-4 ms-lg-5 h5 text-white '>Already have account? </p></Link>
</div>

  </form>
  
  </>
}




////////
// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios';
// import { useContext } from 'react';
// import { UserDataContext } from '../../UserDataContext/UserDataStore';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   let navigate = useNavigate();
// let {saveUserData} = useContext(UserDataContext)
// let [ isloading , setisloading] = useState(false)
// let [error , seterror] = useState('')
// let [ user , setUser] = useState({
   
//      "email":"", 
//      "password":"",
// })

// function getUserData(eventInfo){
// let myUser = {...user}
// myUser[eventInfo.target.name] = eventInfo.target.value
// setUser(myUser);
// };


// async function sendUserDataToApi(){
// let {data} = await axios.post(`https://route-movies-api.vercel.app/signin`,user)
// if(data.message === 'success'){
//   localStorage.setItem('userToken' , data.token);
//   saveUserData();
//   navigate('/')
//     setisloading(false)

// }
// else{
//     seterror(data.message)
//     setisloading(false)

// }


// }

// function sendRegisterDataToApi(e){
//     setisloading(true)
//     e.preventDefault()
// sendUserDataToApi()

// }




//   return <>
//   <form  onSubmit={sendRegisterDataToApi} className='mt-lg-5 '>

  
//   <label htmlFor='email' className='h3 mb-3'>Email :</label>
//   <input onChange={getUserData}  type="email" className="form-control mb-3 my-input" id="email" name='email'/>
//   {error? <div className="alert alert-danger">{'invalid Data'}</div>:''}

//   <label htmlFor='password' className='h3 mb-3'>Password:</label>
//   <input  onChange={getUserData} type="password" className="form-control mb-3 my-input" id="password" name='password'/>
// <button className='btn btn-lg btn-outline-info mt-3'>{isloading===true?<i className='fas fa-spin fa-spinner'></i>:'Login'}</button>
//   </form>
  
//   </>
// }
////////////


// import { createContext } from "react";
// import jwt_decode from "jwt-decode";
// import { useState , useEffect } from "react";

// export let UserDataContext = createContext();

// export default function UserDataContextProvider(props){
//   useEffect(()=> {
//     if(localStorage.getItem('userToken') !==null){
//       saveUserData();
  
//     }
//   } , [])
  

//   let [userData , setuserData] = useState(null)
// function saveUserData(){
//   let encodedToken = localStorage.getItem('userToken')
//   let decodedToken = jwt_decode(encodedToken);
//    setuserData(decodedToken);
//   }


//   return <UserDataContext.Provider value={{saveUserData , userData ,  setuserData}} >
// {props.children}
//   </UserDataContext.Provider>



// }


