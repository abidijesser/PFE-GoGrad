import { useState } from "react";
import axios from 'axios';


function Form3() {
    const [email, setEmail] = useState('');
    const [motdepasse, setMotdepasse] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post('http://student/api/login', { email, motdepasse })
          .then(response => {
            console.log(response.data);

            
            if (response.data.success) {
                
                alert("Login successful!");

            } else {
                
                alert("Login failed. Please check your email and password.");
            }
          })

          .catch(error => {
            console.error(error);
            
            alert("An error occurred. Please try again later.");
          });
      };
    
        return(
            <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
                <h1 className="text-5xl font-semibold"> Welcome Back</h1>
                <p className="font-medium text-lg text-gray-700 mt-4">Welcome back! Please enter your details.</p>

                <form onSubmit={handleSubmit}>

                <div className="mt-8 ">

                    <div>
                        <label htmlFor="email" className="text-lg font-medium ">Email</label>
                        <input id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                        placeholder="Entrer votre email"
                        type="text"/>
                    </div>

                    <div>
                        <label htmlFor="motdepasse" className="text-lg font-medium">Mot de passe</label>
                        <input id="motdepasse" name="motdepasse1" value={motdepasse} onChange={e => setMotdepasse(e.target.value)} className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                        placeholder="Entrer votre mot de passe"
                        type={"password"} />
                    </div>

                    <div className="mt-3.5 flex justify-between items-center">
                        <div>
                            <input type={"checkbox"} id="remember" />
                            <label for="remember"  className="ml-2 font-medium text-base" >Remember me</label>
                        </div>

                        <button className="font-medium text-base text-blue-900">Oublier mot de passe</button>
                    </div>

                    <div className="mt-8 flex flex-col gap-y-4">
                        <button type="submit" className=" active:scale-[.99] active:duration-100 hover:scale[1.01] ease-in-out transition-all  py-2 bg-blue-900 text-white text-lg font-bold rounded-xl " >Se connecter</button> 
                    </div>

                    <div className="mt-2 flex justify-center items-center">
                        <p className=" mt-4 font-medium text-base">Don't have an account?</p>
                        <button className="text-blue-900 text-base font-medium ml-2 ">Register</button>
                    </div>
                
                </div>
                </form>

            </div>
        );
    }


export default Form3;

