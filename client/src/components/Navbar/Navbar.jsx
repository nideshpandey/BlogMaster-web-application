import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './navbar.css'

export default function Navbar() {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () =>{

        dispatch({type: "LOGOUT"});

    }
    return (<div className='top'>
        <div className="center">
            <ul className="topList">
                <li className="topListItem">
                    <Link className='link' to="/"> HOME </Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to="/write"> WRITE A POST </Link>
                </li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT US</li>
                <li className="topListItem" onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
            </ul>

        </div>
        <div className="right">
            {user ? (
                // Use username display instead of picture
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                {user.username}
                            </Link>
                        </li>
                    </ul>
                    // {/* <img
                    //     className="topImg"
                    //     src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    //     alt=""
                    // /> */}
            ) : (
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/login">
                            LOGIN
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/register">
                            REGISTER
                        </Link>
                    </li>
                </ul>
            )}

            <i class="topRightSearch fas fa-search"></i>


        </div>
    </div>)
}
