import React, { useEffect, useState } from 'react';
import "./css/Login.css"

const Login = () => {
    return (
        <div className='content-login'>
            <div className='content-title-login'>
                <img src='./img/logo.jpg' alt='logo tindoar' className='img-logo-login'/>
                <h1>Tindoar</h1>
            </div>

            <div className='types-user-list'>
                <div className='type-user'>Doador</div>
                <div className='type-user'>Entidade</div>
            </div>

            <div className='forms-login'>
                <div className='input-login'>
                    <p>E-mail</p>
                    <input type='text' id='input-email'></input>
                </div>
                <div className='input-login'>
                    <p>Senha</p>
                    <input type='password' id='input-password'></input>
                </div>
                <input type='button' value='Login' id='button-login'></input>
            </div>

            <p id='create-acc'>Criar uma conta</p>
        </div>
    );
};

export default Login;