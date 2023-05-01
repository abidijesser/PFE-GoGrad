import React, { useState, useContext } from "react";
import axios from "axios";
import { RecoveryContext } from "./FormLogin";


function Resetpassword() {

    const[nouveauMotDePasse, setNouveaumotdepasse ]=useState('')
    const[confirmMotDePasse, setConfirmermotdepasse ]=useState('')
    const {setPage} = useContext(RecoveryContext);

    const handleSubmit = async (event) => {
        event.preventDefault();


        console.log("nouveaumotdepasse:", nouveauMotDePasse);
        console.log("confirmermotdepasse:", confirmMotDePasse);
    
        try {
            const response = await axios.post('http://localhost:3000/api/resetpassword', { nouveauMotDePasse, confirmMotDePasse });
            console.log(response.data);

            if (response.data.success) {
              alert("Mot de passe a été changé avec succès .");
              setPage("Login");
            } 
            
            else {
              alert("Le mot de passe ne correspond pas, vérifiez à nouveau .");
            }
        }

        catch (error) {
            console.error(error);
            alert("An error occurred. Please try again later.");
            }
        };

    
    return(
        <div>
      <section className="bg-gray-500 w-screen dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Changer Mot de passe
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="nouveaumotdepasse"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nouveau Mot de passe
                </label>

                <input
                  type="password"
                  name="nouveauMotDePasse"
                  id="nouveaumotdepasse"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={e => setNouveaumotdepasse(e.target.value)}
                ></input>

              </div>


              <div>

                <label
                  htmlFor="confirmermotdepasse"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirmer Mot de passe
                </label>

                <input
                  type="password"
                  name="confirmMotDePasse"
                  id="confirmermotdepasse"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={e => setConfirmermotdepasse(e.target.value)}
                ></input>

              </div>
              
            </form>
            <button
              
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              style={{ marginTop: '10px'}}
              type="submit"
            >
              Reset password
            </button>
          </div>
        </div>
      </section>
    </div>
    );
}
export default Resetpassword