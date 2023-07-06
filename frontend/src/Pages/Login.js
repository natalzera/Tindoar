import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCookies } from "react-cookie";
import "./css/Login.css";
import Message from '../Components/Message';
import axios from 'axios';

import { baseURL } from "../config";

const Login = () => {
    const [cookies, setCookies, removeCookies] = useCookies(["user", "typeUser"]);

    // mostra mensagens vindas de outras páginas
    const locate = useLocation();
    useEffect(() => {
        console.log("Entrei:", locate.state);
        if (locate.state && locate.state.successMessage) {
            toast.success(locate.state.successMessage);
            locate.state.successMessage = undefined;
        }
        if (locate.state && locate.state.errorMessage) {
            toast.error(locate.state.errorMessage);
            locate.state.errorMessage = undefined;
        }
    }, []);

    // controla se o login é de doador ou entidade
    const refTypeDonator = useRef(null);
    const refTypeEntity = useRef(null);
    const [ currentTypeUser, setCurrentTypeUser ] = useState("donator");
    const changeTypeUser = (e) => {
        if(e.target.classList.contains("current-type")) {
            return;
        }

        refTypeDonator.current.classList.remove("current-type");
        refTypeEntity.current.classList.remove("current-type");

        if(currentTypeUser === "donator") {
            setCurrentTypeUser("entity");
        } else {
            setCurrentTypeUser("donator");
        }

        e.target.classList.add("current-type");
    };

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
        let url = baseURL;
        if(currentTypeUser === "entity") {
            url += "/entity/login";
        } else if(currentTypeUser === "donator") {
            url += "/user/login";
        } else {
            toast.error("Ocorreu algum erro!");
        }

        axios({
            url: url,
            method: "post",
            data: {
                email: inputEmail,
                password: inputPassword
            }
        })
        .then((res) => {
            console.log(res);
            setCookies("user", res.data.auth);
            setCookies("typeUser", currentTypeUser);
            navigate('/', { state: {
                successMessage: res.data.message, 
                typeUser: currentTypeUser 
            }});
        })
        .catch((e) => {
            console.log(e);
            toast.error(e.response.data.message);
        });


    };

    // direciona o usuário para a tela de registro
    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <>
            <Message />
            <div className='content-login'>
                <div className='content-title-login'>
                    <img src='./img/logo.png' alt='logo tindoar' className='img-logo-login'/>
                    <h1>tindoar</h1>
                </div>

                <div className='types-user-list'>
                    <p onClick={(e) => changeTypeUser(e)} ref={refTypeDonator} className='type-user current-type'>Doador</p>
                    <p onClick={(e) => changeTypeUser(e)} ref={refTypeEntity} className='type-user'>Entidade</p>
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
        </>
    );
};

export default Login;