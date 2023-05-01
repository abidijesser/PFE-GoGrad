import { useContext, useState, createContext } from "react";
import axios from 'axios';
import Oubliermotdepasse from "./Oubliermotdepasse";
import { RecoveryContext } from "./FormLogin";



function Form() {                               

    const [MotDePasse, setMotdepasse] = useState('');
    const [Email, setEmail]=useState("")
    const {setPage,setValidationcode, validationcode, homepage}=useContext(RecoveryContext)
    const [error , setError] = useState("");
    const [success , setSuccess] = useState("");

    
    const navigateToOublier = async(event) => {
        event.preventDefault();
        
        if(Email){   

            try {
                const response =await axios.post('http://localhost:3000/api/forgotpassword', { 
                    Email
                    },
    
                    {
                        headers: {'X-Requested-With': 'XMLHttpRequest', 
                        "content-type":"application/json", "Access-Control-Allow-Origin": "http://localhost:5000", 
                        "Access-control-request-methods":"POST, GET, DELETE, PUT, PATCH, COPY, HEAD, OPTIONS"}, 
                       "withCredentials": true 
                     }
                     );
    
                console.log(response.data);
                setPage("validationcode");
                } 

            catch (error) {
                console.error(error);
                alert("An error occurred. Please try again later.");
            }
        }
            
        
        else {
            alert("please enter your email then press forgot password")}
        };



    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await axios.post('http://localhost:3000/api/login', { 
                Email, 
                MotDePasse },

                {
                    headers: {'X-Requested-With': 'XMLHttpRequest', 
                    "content-type":"application/json", "Access-Control-Allow-Origin": "http://localhost:5000", 
                    "Access-control-request-methods":"POST, GET, DELETE, PUT, PATCH, COPY, HEAD, OPTIONS"}, 
                   "withCredentials": true 
                 }
                 );

            console.log(response.data);

            if (response.data.success) {
                alert("Login successful!");
                setPage("homepage");
            } 
            
            else {
             alert("Login failed. Please check your Email and password.");
            }
        }

        catch (error) {
             console.error(error);
             alert("An error occurred. Please try again.");
             }
        };
   
    
        return(    

            <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
                <h1 className="text-5xl font-semibold"> Welcome Back</h1>
                <p className="font-medium text-lg text-gray-700 mt-4">Welcome back! Please enter your details.</p>

                <form onSubmit={handleSubmit}>

                <div className="mt-8 ">

                    <div>
                        
                        <label htmlFor="email" className="text-lg font-medium ">Email</label>
                        <input id="email" value={Email}
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full border-2 border-gray-200 rounded-xl p-2 mt-1 bg-gray-100"
                        placeholder="Entrer votre email"
                        autoFocus
                        required
                        type="email"/>
                        
                    </div>

                    <div>

                        <label htmlFor="motdepasse" className="text-lg font-medium"  >Mot de passe</label>
                        <input id="motdepasse" name="motdepasse1" value={MotDePasse} 
                        onChange={(e) => setMotdepasse(e.target.value)} 
                        className="w-full border-2 border-gray-200 rounded-xl p-2 mt-1 bg-gray-100"
                        placeholder="Entrer votre mot de passe"
                        required
                        type="password" />
                        
                    </div>

                    <div className="mt-1.5 ">
                        
                        <a
                            href="#"
                            onClick={navigateToOublier}
                            className="text-blue-900 font-medium text-base" >
                            Forget password
                            
                        </a>

                    </div>

                    <div className="mt-8 flex flex-col gap-y-4">
                        <button type="submit" className=" active:scale-[.99] active:duration-100 hover:scale[1.01] ease-in-out transition-all  py-2 bg-blue-900 text-white text-lg font-bold rounded-xl " >Se connecter</button> 
                    </div>           
              
                </div>
              </form>
            </div>            
        );
    }


export default Form;

