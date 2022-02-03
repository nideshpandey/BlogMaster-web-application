import './post.css';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
    return (
        <div className='post'>
            {post.photo &&
                (<img className="postImg" src={post.photo} alt="Any Photo " />)
            }
            <div className="postInfo">
                <div className="postCat">
                    {post.categories.map((c) => (
                        <span className="postCat">{c.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className='link'>
                    <span className='postTitle'>{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {post.description}
            </p>
        </div>
    );
}


// blogPhoto = 'https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?cs=srgb&dl=pexels-pixabay-261579.jpg&fm=jpg'