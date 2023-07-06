import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./css/Home.css"

import Message from '../Components/Message';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Post from '../Components/Post';
import { baseURL } from '../config';
import axios from 'axios';
import { useCookies } from "react-cookie";

const Home = () => {
    const [cookies, setCookies, removeCookies] = useCookies(["user", "typeUser"]);

    const [typeUser, setTypeUser] = useState(undefined);
    const locate = useLocation();
    useEffect(() => {
        // mostra mensagens vindas de outras páginas
        if (locate.state && locate.state.successMessage) {
            toast.success(locate.state.successMessage);
            locate.state.successMessage = undefined;
        }
        setTypeUser(cookies.typeUser);
        async function getDonations(typeUser) {
            let url = baseURL + "/donations";
            if(typeUser === "donator") {
                url += "/request";
            }

            axios( {
                url: url,
                method: "GET"
            })
            .then((res) => {
                console.log(res.data.donations);
                setDataItens(res.data.donations);
            })
            .catch((e) => {
                console.log(e);
                if(e && e.response && e.response.data) {
                    toast.error(e.response.data.message);
                }
            });
        }
        getDonations(cookies.typeUser);
    }, []);

    // pega os dados dos posts
    const [dataItens, setDataItens] = useState();
    const navigate = useNavigate();

    const goToItemPage = (index) => {
        navigate("/item", { state: { item:dataItens[index] }})
    }

    return (
        <>
            <Message />
            <Header />
            {dataItens !== undefined && <div className='container'>
                <div className='all-posts'>
                    {dataItens.map(item => {
                        if (item.type !== typeUser)    
                            return <Post item={item} goToItemPage={goToItemPage}/>
                    })}
                </div>
            </div>}
            <Footer />
        </>
    );
};

export default Home;