import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './singlepost.css';

export default function SinglePost() {
    const location = useLocation();
    //console.log(location);
    const path = location.pathname.split("/")[2];
    //console.log(path);
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/post/" + path);
            setPost(res.data);
        }
        getPost();
    }, [path]);

    return (
        <div className="singlePost">
            <div className="singlePost">
                <div className="singlePostWrapper">
                    {post.photo && 
                    (<img
                        className="singlePostImg"
                        src= {post.photo}
                        alt="Blog photo posted by Author."
                    />)
                    }
                    <h1 className="singlePostTitle">
                        {post.title}
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit"></i>
                            <i className="singlePostIcon far fa-trash-alt"></i>
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span>
                            Author:
                            <b className="singlePostAuthor">{post.username}
                            </b>
                        </span>
                        <span>{new Date(post.createdAt).toDateString() }</span>
                    </div>
                    <p className="singlePostDesc">
                        {post.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
