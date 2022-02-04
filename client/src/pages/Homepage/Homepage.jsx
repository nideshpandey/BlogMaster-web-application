import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './homepage.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Homepage() {

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();




  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post" + search);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search])


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



