import React, { useEffect, useState } from 'react';
import "./css/User.css"

import Message from '../Components/Message';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useCookies } from 'react-cookie';

const User = () => {
    const [cookies, setCookies, removeCookies] = useCookies("typeUser");

    return (
        <>
            <Message />
            <Header />
            <div className='userInfo content'>
                <h2>Usuário: {cookies.typeUser === "donator" ? "testeTestinho" : "entidadeTeste"}</h2>
                <img className='avatar' src={"/img/defaultProfile.png"} />

                <div className='group-box'>
                    <h2>{cookies.typeUser === "donator" ? "Dados pessoais:" : "Dados da entidade:"}</h2>
                    <div className='street-line'>
                        <label>Nome:</label> 
                        <input className='user-input' type='text' defaultValue={cookies.typeUser === "donator" ?  "Usuário teste" : "Entidade teste"} ></input>
                        <label>Email:</label> 
                        <input className='user-input' type='text' defaultValue={"teste@gmail.com"} ></input>
                    </div>
                    <div className='street-line'>
                        <label>Telefone:</label> 
                        <input className='user-input' type='text' defaultValue={"(11) 95855-8484"} ></input>
                        {cookies.typeUser === "donator" ? <label>CPF:</label> : <label>CNPJ:</label>} 
                        <input className='user-input' type='text' defaultValue={"185.484.825-84"} ></input>
                    </div>
                </div>

                <div className='group-box'>
                    <h2>Endereco:</h2>
                    <div className='street-line'>
                        <label>Rua:</label> 
                        <input className='user-input' type='text' defaultValue={"Rua Santo André"} />
                        <label>Numero:</label> 
                        <input className='user-input' type='number' defaultValue={"3580"} />
                    </div>

                    <div className='street-line'>
                        <label>Bairro:</label> 
                        <input className='user-input' type='text' defaultValue={"Jardim Natália"} />
                        <label>Cep:</label> 
                        <input className='user-input' type='text' defaultValue={"18590-584"} />
                    </div>
                    <button className='button-user' >Salvar</button>
                </div>

                <div className='group-box'>
                    <h2>Alterar Senha:</h2>
                    <div className='street-line'>
                        <label>Senha atual:</label> 
                        <input className='user-input password-input' type='password'></input>
                    </div>
                    <div className='street-line'>
                        <label>Nova senha:</label> 
                        <input className='user-input password-input' type='password'></input>
                    </div>
                    <div className='street-line'>
                        <label>Confirme nova senha:</label> 
                        <input className='user-input' type='password'></input>
                    </div>
                    <button className='button-user' >Mudar senha</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default User;