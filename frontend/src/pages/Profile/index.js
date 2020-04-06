import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import './styles.css';
import brand from '../../assets/brand.svg';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={brand} alt="Be the Hero"/>
                <span> Bem vinda, APAD</span>
                <Link className="button" to="/incidents/new"> Cadastrar novo caso</Link>
                <button type="button" className="">
                    <FiPower size={18} color="#e02091" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul> 
                <li>
                    <strong>CASO:</strong>
                    <p>Novo caso</p>

                    <strong>Descrição:</strong>
                    <p>Descrição descrição descrição  descrição  descrição   </p>

                    <strong>Valor:</strong>
                    <p>1231 </p>

                    <button  type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/> 
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Novo caso</p>

                    <strong>Descrição:</strong>
                    <p>Descrição descrição descrição  descrição  descrição   </p>

                    <strong>Valor:</strong>
                    <p>1231 </p>

                    <button  type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/> 
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Novo caso</p>

                    <strong>Descrição:</strong>
                    <p>Descrição descrição descrição  descrição  descrição   </p>

                    <strong>Valor:</strong>
                    <p>1231 </p>

                    <button  type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/> 
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Novo caso</p>

                    <strong>Descrição:</strong>
                    <p>Descrição descrição descrição  descrição  descrição   </p>

                    <strong>Valor:</strong>
                    <p>1231 </p>

                    <button  type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/> 
                    </button>
                </li>
            </ul>

        </div>
    )
}