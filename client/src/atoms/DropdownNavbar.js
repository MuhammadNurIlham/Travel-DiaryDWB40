import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import partner from '../assets/partner.png';
import { UserContext } from '../context/UserContext';

function DropdownNavbar() {
    // from userContext for logout
    const [state, dispatch] = useContext(UserContext);
    const logout = () => {
        dispatch({
            type: "LOGOUT",
            isLogin: false
        });
        return alert('Anda berhasil Logout euyy!')
    }

    return (
        <div className='container'>
            <Dropdown>
                <Dropdown.Toggle>
                    <img width="25px" src={partner} alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Link to="/Profile">
                            {/* <img src={partner} alt="user" /> */}
                            Profile
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to="/Editor">
                            {/* <img src={partner} alt="journey" /> */}
                            New Journey
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to="/Bookmark">
                            {/* <img src={partner} alt="bookmark" /> */}
                            Bookmark
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => logout()}>
                        {/* <img src={partner} alt="logout" /> */}
                        Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default DropdownNavbar