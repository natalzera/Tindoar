import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { BiHomeAlt2, BiUserCircle, BiLogOut, BiLogIn, BiCheckboxChecked } from 'react-icons/bi';
import { toast } from 'react-toastify';
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();

    // navegações simples
    const handleHomeClick = () => { navigate('/'); };
    const handleUserClick = () => { navigate('/user'); };
    const handleLogOutClick = () => {
        navigate('/login', { state: { successMessage: 'Usuário Deslogado.' } });
    };

    // navegações para página de busca
    const [inputFind, setInputFind] = useState("");
    const handleInputChange = (e) => { setInputFind(e.target.value); };
    const handleFindClick = () => {
        if (inputFind === '') {
            toast.error('Preencha o nome buscado.')
            return;
        }
        navigate('/find/' + inputFind);
    };

    return (
        <header>
            <div className='logo-header'>
                <img src="./img/logo-transp.png" alt="logo Tindoar" />
            </div>
            <div className="search-bar">
                <input
                    onChange={handleInputChange}
                    value={inputFind}
                    type="text" 
                    className="search-text"
                />
                <div className="search-loupe-div" onClick={handleFindClick}>
                    <FaSearch className="search-loupe"/>
                </div>
            </div>
            <div className="nav-links">
                <div className="nav-link" onClick={handleHomeClick}>
                    <BiHomeAlt2 className="icon"/>
                </div>
                <div className="nav-link" onClick={handleUserClick}>
                    <BiUserCircle className="icon"/>
                </div>
                <div className="nav-link" onClick={handleLogOutClick}>
                    <BiLogOut className="icon"/>
                </div>
            </div>
        </header>
    );
};

export default Header;