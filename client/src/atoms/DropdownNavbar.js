import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


import partner from '../assets/partner.png';
import profile from '../assets/users.png'
import Vector from '../assets/Vector.png'
import Logout from '../assets/logout.png'
import bookmark from '../assets/bookmark.png'

function DropdownNavbar() {
    let navigate = useNavigate();
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
                <Dropdown.Toggle variant="light" bg="none">
                    <img width="40px" src={partner} alt="" className="rounded-circle" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate('/Profile')} >
                        <img src={profile} alt="" className='pe-2' />
                        Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate('/Editor')}>
                        <img src={Vector} alt="" className='pe-2' />
                        New Journey
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate('/Bookmark')}>
                        <img src={bookmark} alt="" className='pe-3' />
                        Bookmark
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => logout()}>
                        <img src={Logout} alt="" className='pe-2' />
                        Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default DropdownNavbar