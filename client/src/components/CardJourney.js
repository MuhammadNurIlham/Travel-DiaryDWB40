import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'

function CardJourney() {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col pt-4">
                    <div className="card h-100">
                        <img src={image1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <Link to="/DetailJourney">
                                <h5 className="card-title">Card title</h5>
                            </Link>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardJourney;