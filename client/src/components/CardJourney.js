import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { API } from '../config/API';
import image1 from '../assets/image1.png'

function CardJourney() {
    let { data: journeys } = useQuery("journeysCache", async () => {
        const response = await API.get("/journeys");
        return response.data.data
    })


    return (
        <div className='container'>
            {journeys?.length !== 0 ? (
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {journeys?.map((item) => (
                        <div className="col pt-4">
                            <div className="card h-100">
                                <img src={item?.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <Link to="/DetailJourney">
                                        <h5 className="card-title">{item?.title}</h5>
                                    </Link>
                                    <p className="card-text">{item?.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            ) : (<div>Halo halo haloooooooooo</div>)}
        </div>
    )
}

export default CardJourney;