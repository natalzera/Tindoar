import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./css/Home.css"

import Message from '../Components/Message';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Post from '../Components/Post';

const Home = () => {
    const [typeUser, setTypeUser] = useState(undefined);
    const locate = useLocation();
    useEffect(() => {
        // mostra mensagens vindas de outras páginas
        if (locate.state && locate.state.successMessage) {
            toast.success(locate.state.successMessage);
            locate.state.successMessage = undefined;
        }
        
        // verifica se o usuário é doador ou entidade necessitada
        if (locate.state && locate.state.typeUser) {
            if (locate.state.typeUser === "donator") setTypeUser("D");
            else if (locate.state.typeUser === "entity") setTypeUser("P");
            else setTypeUser(undefined);
        } else {
            navigate('/login', { state: { errorMessage: 'Usuário não logado.' } });
        }
    }, []);

    // pega os dados dos posts
    const [dataItens, setDataItens] = useState();
    const getData = async () => {
        const data = await fetch('./data/itens.json');
        const jsonData = await data.json();
        setDataItens(jsonData.array);
    };
    useEffect(() => {
        getData();
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <Message />
            <Header />
            {dataItens !== undefined && <div className='container'>
                <div className='all-posts'>
                    {dataItens.map(item => {
                        if (item.type !== typeUser)    
                            return <Post item={item} />
                    })}
                </div>
            </div>}
            <Footer />
        </>
    );
};

export default Home;