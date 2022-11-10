import React from 'react'
import julian from '../assets/julian.jpg'

function ProfileComponent() {
    return (
        <div className='container'>
            <h2 className='text-start py-4 heading-journey'>Profile</h2>
            <img
                src={julian}
                className="rounded-circle mx-auto d-block"
                alt="..."
                style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                    objectFit: "cover",
                    marginBottom: "10px",
                }} />
            <p className="profile-title">Namanya Fadhil</p>
            <p className="profile-subtitle">fadhil@mail.com</p>
        </div>
    )
}

export default ProfileComponent