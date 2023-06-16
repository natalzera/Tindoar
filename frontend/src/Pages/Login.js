import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/Login.css";

const Login = () => {

    // atribui os valores do input lido a cada variável referente
    const [inputEmail, setInputEmail] = useState('');
    const handleInputEmailChange = (event) => {
        setInputEmail(event.target.value);
    };

    const [inputPassword, setInputPassword] = useState('');
    const handleInputPasswordChange = (event) => {
        setInputPassword(event.target.value);
    };

    const listenerKeyEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleClickLogin();
        }
    };

    // verifica o login nos dados e direciona à página do usuário
    const isFilled = (input) => {
        if(input === undefined || input.length === 0) return false;
        return true;
    };
    const handleClickLogin = () => {
        if(!isFilled(inputEmail) || !isFilled(inputPassword)) {
            alert('Email e senha devem ser preenchidos.');
            setInputEmail('');
            setInputPassword('');
            return;
        }

        // reseta os valores de input
        alert(inputEmail + ' ' + inputPassword);
        setInputEmail('');
        setInputPassword('');
    };

    // direciona o usuário para a tela de registro
    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className='content-login'>
            <div className='content-title-login'>
                <img src='./img/logo.jpg' alt='logo tindoar' className='img-logo-login'/>
                <h1>tindoar</h1>
            </div>

            <div className='types-user-list'>
                <p className='type-user current-type'>Doador</p>
                <p className='type-user'>Entidade</p>
            </div>

            <div className='forms-login'>
                <div className='input-login'>
                    <p>E-mail</p>
                    <input 
                        id="input-email" 
                        onChange={handleInputEmailChange}
                        value={inputEmail}
                        type="email" 
                        className="input-text"
                        onKeyDown={(e) => listenerKeyEnter(e)}
                    />
                </div>
                <div className='input-login'>
                    <p>Senha</p>
                    <input 
                        id="input-password"
                        onChange={handleInputPasswordChange}
                        value={inputPassword}
                        type="password" 
                        className="input-text"
                        onKeyDown={(e) => listenerKeyEnter(e)}
                    />
                </div>
                <input type='button' value='Login' className='button-login' onClick={handleClickLogin}></input>
            </div>

            <p id='create-acc' onClick={handleRegisterClick}>Criar uma conta</p>
        </div>
    );
};

export default Login;