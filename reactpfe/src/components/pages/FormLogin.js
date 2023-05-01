import { createContext, useState } from 'react';
import Login from './Login';
import Resetpassword from './resetpassword';
import Oubliermotdepasse from './Oubliermotdepasse';
import Home from '../../LandingPage/Home';


 export const RecoveryContext=createContext();
 // this function will allows us to manipulate the states in different components

function FormLogin() {

   const[page,setPage]=useState("Login");
  //  const[Email,setEmail]=useState('');
   const[validationcode,setValidationcode]=useState('');
   const[homepage,setHomepage]=useState('');

   function NavigateComponents(){
     if(page === "Login") return <Login />
     if(page === "validationcode") return <Oubliermotdepasse />
     if(page === "reset") return <Resetpassword />
     if(page === "homepage") return <Home />
     return <Login /> }
  

  return (
    <div >
        
        <RecoveryContext.Provider
          value={{page, setPage, validationcode, setValidationcode, homepage}} >

        <NavigateComponents />

        </RecoveryContext.Provider>  

        

    </div>
  );
}

export default FormLogin;