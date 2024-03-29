import React, { useEffect, useState } from 'react';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { FaRegComment } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './Post.css';
import { BiUser } from 'react-icons/bi';

const Post = ({ item, goToItemPage }) => {
    // trata o botão de curtir o post
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLiked(!liked);
    };

    // navegações do produto
    const navigate = useNavigate();
    const handleMessage = () => { navigate('/chat/' + item.userOwner + '+' + item.id); };
    const handleUserPost = () => { navigate('/user/' + item.userOwner); };
    const handleItemPost = () => { goToItemPage(item.id - 1); };

    return (
        <div className='post-container'>
            <div className='header-post' onClick={handleUserPost}>
                <BiUser className="icon-user"/>
                {item.name}
            </div>
            <img src={item.image_link} alt="post image" className='img-post' onClick={handleItemPost}/>
            <div className='interact-post'>
                <div className='like-post' onClick={handleLike}>
                    {!liked && <FcLikePlaceholder className='icon-post'/>}
                    {liked && <FcLike className='icon-post'/>}
                </div>
                <FaRegComment className='icon-post' onClick={handleMessage}/>
            </div>
            <div className='content-post' onClick={handleItemPost}>
                <div className='item-title'>{item.item_name}</div>
                <div className='item-description'>{item.item_description}</div>
            </div>
        </div>
    );
};

export default Post;