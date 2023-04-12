import React, { Component } from "react";
import Form from "./Form";


class Login extends Component{
    render(){
        return(
            <div className="flex w-full h-screen">
                <div className="w-full flex items-center justify-center lg:w-1/2" >
                    <Form />
                </div>

                <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                    <div className="w-60 h-60 bg-gradient-to-tr from-pink-500 to-blue-500 rounded-full animate-bounce" />
                    <div className="w-full h-1/2  bg-white/10 backdrop-blur-lg absolute bottom-0 "/>
                       
                    
                </div>
                
            </div>
        );
    }
}

export default Login;

