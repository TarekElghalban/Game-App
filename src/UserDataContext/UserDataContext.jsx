
import { createContext } from "react";
import jwt_decode from "jwt-decode";
import { useState , useEffect } from "react";

export let UserDataContext = createContext();

export default function UserDataContextProvider(props){
  useEffect(()=> {
    if(localStorage.getItem('userToken') !==null){
      saveUserData();
  
    }
  } , [])
  

  let [userData , setuserData] = useState(null)
function saveUserData(){
  let encodedToken = localStorage.getItem('userToken')
  let decodedToken = jwt_decode(encodedToken);
   setuserData(decodedToken);
  }


  return <UserDataContext.Provider value={{saveUserData , userData ,  setuserData}} >
{props.children}
  </UserDataContext.Provider>



}