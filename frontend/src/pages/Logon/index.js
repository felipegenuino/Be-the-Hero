import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import heroBrand from '../../assets/brand.svg';
import heroImage from '../../assets/heroes.png'; 


export default function Logon(){

   const [id, setId] = useState('');
    
   async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id})
            console.log(response.data.name)
        }catch(err){
            alert('falha no login tente novamente')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={heroBrand} alt="Be the Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID" type="text"
                        onChange={e=> setId(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>
                    <Link to="/register" className="back-link" >
                        <FiLogIn size={16} color="#302041"/>
                        Nao tenho cadastro</Link>
                </form>
            </section>

            <img src={heroImage} alt="Hero"/>
        </div>
    )
}