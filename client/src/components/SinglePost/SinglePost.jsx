import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import './singlepost.css';

export default function SinglePost() {
    const location = useLocation();
    //console.log(location);
    const path = location.pathname.split("/")[2];
    //console.log(path);
    const [post, setPost] = useState({});
    const PF = "http://localhost:3000/images/";
    const { user } = useContext(Context);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/post/" + path, { data: { username: user.username } });
            setPost(res.data);
        }
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/post/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (err) { }
    };

    return (
        <div className="singlePost">
            <div className="singlePost">
                <div className="singlePostWrapper">
                    {post.photo &&
                        (<img
                            className="singlePostImg"
                            src={PF + post.photo}
                            alt="Blog photo posted by Author."
                        />)
                    }
                    <h1 className="singlePostTitle">
                        {post.title}
                        {post.username === user?.username && (
                            <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit"></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete} ></i>
                            </div>
                        )}
                    </h1>
                    <div className="singlePostInfo">
                        <span>
                            Author:
                            <Link to={`/?user=${post.username}`} className='link'>
                                <b className="singlePostAuthor">{post.username}
                                </b>

                            </Link>
                        </span>
                        <span>{new Date(post.createdAt).toDateString()}</span>
                    </div>
                    <p className="singlePostDesc">
                        {post.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
