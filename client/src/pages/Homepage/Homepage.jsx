import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePage from '../SinglePagePost/SinglePage';
import './homepage.css'

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="homepage">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}



