import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './homepage.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Homepage() {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async ()=> {
      const res = await axios.get("/post");
      setPosts(res.data);
    }
     fetchPosts(); 
  }, [])


  return (
    <>
      <Header />
      <div className="homepage">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}



