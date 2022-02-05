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
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/post/" + path, { data: { username: user.username } });
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.description);
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

    const handleUpdate = async () => {
        try {
            await axios.put(`/post/${post._id}`, {
                username: user.username,
                title,
                description
            });
            // window.location.reload();
            setUpdateMode(false);
        } catch (err) {
        }
    }

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
                    {
                        updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} /> : (
                            <h1 className="singlePostTitle">
                                {title}
                                {post.username === user?.username && (
                                    <div className="singlePostEdit">
                                        <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete} ></i>
                                    </div>
                                )}
                            </h1>

                        )
                    }
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
                    {updateMode ? <textarea className="singlePostDescInput" value={description} onChange={(e) => setDesc(e.target.value)} /> : (
                        <p className="singlePostDesc">
                            {description}
                        </p>
                    )}
                    {updateMode &&
                        (<button className="singlePostButton" onClick={handleUpdate}>
                            Update Post
                        </button>)
                    }
                </div>
            </div>
        </div>
    );
}
