import React, { useEffect, useRef, useState } from 'react';
import "./css/Login.css"
import "./css/Register.css"

const Register = () => {
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

    const changeForm = (currentTypeUser) => {
        if(currentTypeUser === "donator") {
            return (
                <>
                    <div className='input-login'>
                        <p>E-mail</p>
                        <input type='text' id='input-email'></input>
                    </div>
                    <div className='input-login'>
                        <p>Senha</p>
                        <input type='password' id='input-password'></input>
                    </div>
                    <div className='input-login'>
                        <p>Confirmar senha</p>
                        <input type='password' id='input-confirm-password'></input>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className='input-login'>
                        <p>E-mail</p>
                        <input type='text' id='input-email'></input>
                    </div>
                    <div className='input-login'>
                        <p>CNPJ</p>
                        <input type='text' id='input-email'></input>
                    </div>
                    <div className='input-login'>
                        <p>Senha</p>
                        <input type='password' id='input-password'></input>
                    </div>
                    <div className='input-login'>
                        <p>Confirmar senha</p>
                        <input type='password' id='input-confirm-password'></input>
                    </div>
                    
                </>
            );
        }
    };

    return (
        <div className='content-login'>
            <div className='content-title-login'>
                <img src='./img/logo.jpg' alt='logo tindoar' className='img-logo-login'/>
                <h1>tindoar</h1>
            </div>

            <div className='types-user-list'>
                <p onClick={(e) => changeTypeUser(e)} ref={refTypeDonator} className='type-user current-type'>Doador</p>
                <p onClick={(e) => changeTypeUser(e)} ref={refTypeEntity} className='type-user'>Entidade</p>
            </div>

            <div className='forms-login'>
                {changeForm(currentTypeUser)}
                <input type='button' value='Criar conta' className='button-login' id='button-login'/>
                <div className="use-term">
                    <input type="checkbox" id="check-use-terms"/>
                    <p>Concordo com os termos de uso</p>
                </div>
            </div>

            <p id='create-acc'>Já possuo conta</p>
        </div>
    );
};

export default Register;