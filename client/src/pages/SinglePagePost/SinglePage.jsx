
import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';
import './singlepage.css';

export default function SinglePage() {
  return (
  <div className="singlepage"> 
      <SinglePost />
      <Sidebar />
  </div>
  );
}
