import React from 'react'
import Phuket from '../assets/Phuket.png'
import NavigationBar from './Navbar'

function Jumbotron() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-inner">
                <div className="carousel-item active position-relative">
                    <div className="carousel-caption align-items-start fixed-top">
                        <NavigationBar />
                    </div>
                    <img src={Phuket} className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron