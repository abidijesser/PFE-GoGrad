import React, { useState } from "react";
import axios from "axios";

function Resetpassword() {

    const[nouveauMotDePasse, setNouveaumotdepasse ]=useState('')
    const[confirmMotDePasse, setEConfirmermotdepasse ]=useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();


        console.log("nouveaumotdepasse:", nouveauMotDePasse);
        console.log("confirmermotdepasse:", confirmMotDePasse);
    
        try {
            const response = await axios.post('http://localhost:3000/api/login', { nouveauMotDePasse, confirmMotDePasse });
            console.log(response.data);

            if (response.data.success) {
            alert("Login successful!");
            } else {
            alert("Login failed. Please check your email and password.");
            }
        }

        catch (error) {
            console.error(error);
            alert("An error occurred. Please try again later.");
            }
        };

    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>

                    <div>
                        <h1>Change password</h1>
                    </div>

                    <div>
                        <label htmlFor="nouveaumotdepasse">Nouveau mot de passe</label>
                        <input id="nouveaumotdepasse" value={nouveauMotDePasse}
                                        onChange={e => setNouveaumotdepasse(e.target.value)} 
                                        className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                                        placeholder="Entrer votre nouveau mot "
                                        type="password"
                                        name="nouveauMotDePasse"/>
                    </div>

                    <div>
                        <label htmlFor="confirmermotdepasse">Nouveau mot de passe</label>
                        <input id="confirmermotdepasse" value={confirmMotDePasse}
                                        onChange={e => setEConfirmermotdepasse(e.target.value)} 
                                        className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                                        placeholder="Entrer votre nouveau mot "
                                        type="password"
                                        name="confirmMotDePasse"/>
                    </div>

                    <div className="mt-8 flex flex-col gap-y-4">
                            <button type="submit" className=" active:scale-[.99] active:duration-100 hover:scale[1.01] ease-in-out transition-all  py-2 bg-blue-900 text-white text-lg font-bold rounded-xl " >Reset Password</button> 
                    </div>

                </div>
            </form>
        </div>
    );
}
export default Resetpassword