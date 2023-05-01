import React, { useState } from "react";
import  './UserProfile.css'
import profileuser from './profileuser.png'
import pen from './pen.png'
import axios from 'axios';


function UserProfile(){

    const [Nom, setName] = useState('jasser abidi');
    const [Stage, setStage] = useState('Stage Interne');
    const [Filiere, setFiliere] = useState('LSI3');
    const [Email, setEmail] = useState('jasserabidi@gmail.com');
    const [MotDePasse, setMotdepasse] = useState('******');
    const [Etablissement, setEtablissement] = useState('FSM');
    const [Projet, setProjet] = useState('Plateforme de gestion des pfe');
    const [Cahierdescharges, setCahier] = useState('vide');
    const [Competences, setCompetences] = useState('HTML, CSS, JAVASCRIPT, React.js, 4444444');
    const [Github, setGithub] = useState('https://abidijasser.git');
    

    const handleNameChange = (value) => {
        setName(value);
      };

      const handleStageChange = (value) => {
        setStage(value);
      };

      const handleFiliereChange = (value) => {
        setFiliere(value);
      };
    
    
      const handleEmailChange = (value) => {
        setEmail(value);
      };

      const handleMotdepasseChange = (value) => {
        setMotdepasse(value);
      };

      const handleEtablissementChange = (value) => {
        setEtablissement(value);
      };

      const handleProjetChange = (value) => {
        setProjet(value);
      };

      const handleCahierChange = (value) => {
        setCahier(value);
      };

      const handleCompetenceChange = (value) => {
        setCompetences(value);
      };

      const handleGithubChange = (value) => {
        setGithub(value);
      };



      function InputField({ label, value, onChange }) {
        const [isEditing, setIsEditing] = useState(false);
        const [tempValue, setTempValue] = useState(value);
    
       
      
        const handleEdit = () => {
          setIsEditing(true);
          setTempValue(value);
        };
      
        const handleCancel = () => {
          setIsEditing(false);
        };
      
        const handleSave = async (event) => {
            event.preventDefault();
            setIsEditing(false);
            onChange(tempValue);
    
            try {
                const response = await axios.post('http://localhost:3000/api/login', { 
                    Email,
                    MotDePasse, 
                    Nom,
                    Stage,
                    Filiere,
                    Etablissement,
                    Projet,
                    Cahierdescharges,
                    Competences,
                    Github               
                
                });
                console.log(response.data);
    
                if (response.data.success) {
                alert("Login successful!");
                } else {
                alert("Login failed. Please check your Email and password.");
                }
            }
    
            catch (error) {
                console.error(error);
                alert("An error occurred. Please try again later.");
                }
        };
      
        return (
            <div>
    
                <div className="flex justify-between items-center">
    
                    <label className="mr-20">{label}</label>
    
                    {!isEditing && (
    
                           
                            <button className="bg-mygreen hover:bg-mygreen2 text-white font-bold py-1 px-2 rounded  " 
                            onClick={handleEdit}>
    
                            {/* <img src={pen} alt="Modifier" width="30px" /> */}
                                Modifier
                            </button> 
                        
                    )}
    
    
                    {isEditing && (
                        <>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSave}>
                                Enregistrer
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancel}>
                                Annuler
                            </button>
                        </>
                    )}
    
                </div>
    
                {!isEditing && (
                    <div className="border-b-2 border-gray-500">{value}</div>
                )}
    
                {isEditing && (
                    <div className="mt-2">
                        <input type="text" className="border-2 border-gray-500 p-2" value={tempValue} onChange={(e) => setTempValue(e.target.value)} />
                    </div>
                )}
    
            </div>
        )};






    return(
        <div>
        

             <div className="text-3xl font-semibold mt-7 ml-20">
                Mon Profil
            </div>

            <div  className="ml-20 mt-5 ">

                <div id="container1" className="bg-white  flex justify-between items-center">
                   
                        <div><img className="mb-1 ml-5" src={profileuser} alt="user profile" width="120px" height="120px" /></div> 

                        <div className=" mr-40 mt-3 flex justify-between gap-20 ">

                            <div className="flex flex-col "> 

                                
                                <input className="font-medium text-xl"  value={Nom} onChange={handleNameChange} />
                                <input value={Stage} onChange={handleStageChange} />
                                <input value={Filiere} onChange={handleFiliereChange} />

                            </div>

                            <div className="mr-30">
                                 
                                <div className="flex justify-between items-center ">
                                    <div className="mr-40 text-lg "> Email</div>
                                    <InputField  className="text-gray-500" value={Email} onChange={handleEmailChange} />
                                     {/* <button className="px-3 py-1 bg-mygreen hover:bg-mygreen2 text-white rounded-md changer1 " >Modifier</button>   */}
                                    
                                </div>

                                <hr className="mt-3"/>

                                <div className="flex  items-center mt-3">
                                    <div className="mr-40 text-lg "> Mot De Passe</div>
                                    <InputField className="text-gray-500 " value={MotDePasse} onChange={handleMotdepasseChange} />
                                     {/* <button className="px-3 py-1 bg-mygreen hover:bg-mygreen2 text-white rounded-md changer1 " >Modifier</button>   */}
                                </div>

                            </div>

                        </div>
                   
                </div>
            </div> 


            <div  className="ml-20 mt-5 ">

                <div id="container2" className="bg-white  flex justify-between items-center ">
                   
                        <div className=" ml-10 flex gap-40 mb-2">

                            <div className="">
                                 
                                <div className="flex justify-between items-center">
                                    <div className="mr-40 text-lg "> Etablissemnt d'acceuil</div>

                                    <div className="flex items-center gap-80 ml-">
                                        <InputField className="text-gray-500 " value={Etablissement} onChange={handleEtablissementChange} /> 
                                         {/* <button className="px-3 py-1 bg-mygreen hover:bg-mygreen2 text-white rounded-md changer1 " >Modifier</button>  */}
                                    </div>
                                    
                                </div>

                                <hr className="mt-3" />

                                <div className="flex justify-between items-center mt-3">
                                    <div className="mr-40 text-lg "> Projet</div>

                                    <div className="flex items-center gap-80 ml-6">
                                        <InputField className="text-gray-500 " value={Projet} onChange={handleProjetChange} />
                                         {/* <button className="px-3 py-1 bg-mygreen hover:bg-mygreen2 text-white rounded-md changer1 " >Modifier</button>  */}
                                    </div>

                                </div>

                                <hr className="mt-2"/>

                                <div className="flex justify-between items-center mt-3">
                                    <div className="mr-40 text-lg "> Cahier des charges</div>

                                    <div className="flex items-center gap-80 ml-6">
                                        <InputField className="text-gray-500 " value={Cahierdescharges} onChange={handleCahierChange} />
                                         {/* <button className="px-3 py-1 bg-mygreen hover:bg-mygreen2 text-white rounded-md changer1 " >Modifier</button>  */}
                                    </div>
                                    
                                </div>

                            </div>

                        </div>
                   
                </div>
            </div> 

            <div  className="ml-20 mt-5 ">

                <div id="container3" className="bg-white  flex justify-between items-center ">
                   
                    <div className=" ml-10 mb-4 flex gap-30">

                        <div className="">
                                 
                            <div className="flex justify-between items-center mt-5">
                                <div className="mr-40 text-lg "> Compétences</div>

                                <div className="flex items-center gap-80">
                                    <InputField className="text-gray-500 mr-50 " value={Competences} onChange={handleCompetenceChange} />
                                    {/* <button className="px-3 py-1 bg-mygreen hover:bg-mygreen2 text-white rounded-md changer1 " >Modifier</button>  */}
                                </div>
                                    
                            </div>

                            <hr className="mt-2" />

                            <div className="flex justify-between items-center ">
                                <div className="mr-40 text-lg "> Compte Github</div>

                                <div className="flex items-center gap-20">
                                    <InputField className="text-gray-500 Github mr-60" value={Github} onChange={handleGithubChange} />
                                     {/* <button className="px-3 py-1 bg-mygreen hover:bg-mygreen2 text-white rounded-md changer1 " >Modifier</button>  */}
                                </div>
                                    
                            </div>


                        </div>

                    </div>                      
                   
                </div>
            </div>
               

            
        </div>




            
    );
}

export default UserProfile;