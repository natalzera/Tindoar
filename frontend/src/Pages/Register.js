import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./css/Login.css";
import "./css/Register.css";
import Message from '../Components/Message';
import axios from 'axios';
import { baseURL } from '../config';

const Register = () => {
    const navigate = useNavigate();

    // controla se o registro é de doador ou entidade
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
    const [inputName, setInputName] = useState('');
    const handleInputNameChange = (event) => {
        setInputName(event.target.value);
    };

    const [inputEmail, setInputEmail] = useState('');
    const handleInputEmailChange = (event) => {
        setInputEmail(event.target.value);
    };

    const [inputCPF, setInputCPF] = useState('');
    const handleInputCPFChange = (event) => {
        setInputCPF(event.target.value);
    };

    const [inputCNPJ, setInputCNPJ] = useState('');
    const handleInputCNPJChange = (event) => {
        setInputCNPJ(event.target.value);
    };

    const [inputPassword, setInputPassword] = useState('');
    const handleInputPasswordChange = (event) => {
        setInputPassword(event.target.value);
    };

    const [inputConfirmPassword, setInputConfirmPassword] = useState('');
    const handleInputConfirmPasswordChange = (event) => {
        setInputConfirmPassword(event.target.value);
    };

    const listenerKeyEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleClickRegister();
        }
    };

    const [acceptTerms, setAcceptTerms] = useState(false);
    const handleHandleCheck = (event) => {
        setAcceptTerms(event.target.checked);
    };

    // verifica os dados de registro e direciona à página do usuário
    const isFilled = (input) => {
        if(input === undefined || input.length === 0) return false;
        return true;
    };
    const handleClickRegister = () => {
        if(
            !isFilled(inputEmail) || !isFilled(inputPassword) || !isFilled(inputConfirmPassword) 
            || (currentTypeUser === "entity" && !isFilled(inputCNPJ))
        ) {
            toast.warn('Todos os campos devem ser preenchidos.');
            return;
        } else if (!acceptTerms) {
            toast.warn("Você deve aceitar os termos de uso.");
            return;
        }
        else if (inputPassword !== inputConfirmPassword) {
            toast.warn('As senhas devem ser iguais.');
            setInputPassword('');
            setInputConfirmPassword('');
            return;
        }

        let url = baseURL;
        if(currentTypeUser === "entity") {
            url += "/entity/register";
        } else if(currentTypeUser === "donator") {
            url += "/user/register";
        } else {
            toast.error("Ocorreu algum erro!");
        }

        // reseta os valores de input
        axios({
            url: url,
            method: "post",
            data: {
                name: inputName,
                email: inputEmail,
                password: inputPassword,
                cpf: inputCPF,
                cnpj: inputCNPJ
            }
        })
        .then((res) => {
            console.log(res.data.message);
            navigate('/login', { state: {
                successMessage: res.data.message,
            }});
        })
        .catch((e) => {
            console.log(e);
            toast.error(e.response.data.message);
        });
    };

    const changeForm = (currentTypeUser) => {
        if(currentTypeUser === "donator") {
            return (
                <>
                    <div className='input-login'>
                        <p>Nome</p>
                        <input
                            id="input-name" 
                            onChange={handleInputNameChange}
                            value={inputName}
                            type="text" 
                            className="input-text"
                            onKeyDown={(e) => listenerKeyEnter(e)}
                        />
                    </div>
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
                        <p>CPF</p>
                        <input
                            id="input-cpf" 
                            onChange={handleInputCPFChange}
                            value={inputCPF}
                            type="number" 
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
                    <div className='input-login'>
                        <p>Confirmar senha</p>
                        <input
                            id="input-confirm-password"
                            onChange={handleInputConfirmPasswordChange}
                            value={inputConfirmPassword}
                            type="password" 
                            className="input-text"
                            onKeyDown={(e) => listenerKeyEnter(e)}
                        />
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className='input-login'>
                        <p>Nome</p>
                        <input
                            id="input-email" 
                            onChange={handleInputNameChange}
                            value={inputName}
                            type="text" 
                            className="input-text"
                            onKeyDown={(e) => listenerKeyEnter(e)}
                        />
                    </div>
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
                        <p>CNPJ</p>
                        <input
                            id="input-cnpj" 
                            onChange={handleInputCNPJChange}
                            value={inputCNPJ}
                            type="text" 
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
                    <div className='input-login'>
                        <p>Confirmar senha</p>
                        <input
                            id="input-confirm-password"
                            onChange={handleInputConfirmPasswordChange}
                            value={inputConfirmPassword}
                            type="password" 
                            className="input-text"
                            onKeyDown={(e) => listenerKeyEnter(e)}
                        />
                    </div>
                    
                </>
            );
        }
    };

    // direciona o usuário para a tela de login
    const handleLoginClick = () => {
        navigate('/login');
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
                    {changeForm(currentTypeUser)}
                    <input type='button' value='Criar conta' className='button-login' onClick={handleClickRegister}/>
                    <div className="use-term">
                        <input type="checkbox" id="check-use-terms" onChange={handleHandleCheck}/>
                        <p>Concordo com os termos de uso</p>
                    </div>
                </div>

                <p id='create-acc' onClick={handleLoginClick}>Já possuo conta</p>
            </div>
        </>
    );
};

export default Register;