import React, { useEffect, useState } from 'react';
import "./css/Item.css"

import Message from '../Components/Message';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';

const User = () => {
    const locate = useLocation();
    const [item, setItem] = useState(undefined);
    useEffect(() => {
        setItem(locate.state.item);
    }, []);
    return (
        <>
            <Message />
            <Header />
            {item !== undefined && 
            <div className="screen-item content">
                <div className="data-item">
                    <h2 className="item-info-name">Nome: {item.item_name}</h2>
                    <div className="imgs-item">
                        <div className="current-image-item">
                            <img src={item.image_link} id="current-image" />
                        </div>
                    </div>
                    <div className="info-item">
                        <p> {"Do usuário/entidade: " + item.name}</p>
                        <div className="descr-item-info">
                            <h4>Descrição do item/pedido:</h4>
                            <p>
                                {item.item_description}
                            </p>
                        </div>
                    </div>
                    <div className="buttons-item-info">
                        <input 
                            type="button"
                            name="button" 
                            className="button-buy" 
                            value="Ir para o chat com o doador/entidade"
                            />
                    </div>
                </div>
            </div>
            }
            <Footer />
        </>
    );
};

export default User;