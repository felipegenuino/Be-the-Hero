import React from 'react'
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import brand from '../../assets/brand.svg';

import './styles.css'

export default function NewIncident(){
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={brand} alt="Be the Hero"/>
                    <h1>Cadastro Novo Caso</h1>
                    <p>Descriva o texto para encontrar seu herói</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                            Voltar para home
                    </Link>
                </section>
                    
                <form >  
                    <input placeholder="Titulo do caso"  />
                    <textarea placeholder="Descrição"  />
                    <input placeholder="Valor em Reais"  />

                <button className="button">Cadastrar-se</button>
                </form>
            </div>
        </div>
    )
}