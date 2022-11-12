import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../config/API';
import { FaBookmark } from "react-icons/fa"
import { FaRegBookmark } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"

import image1 from '../assets/image1.png'

function CardJourney() {
    let navigate = useNavigate();

    let { data: journeys } = useQuery("journeysCache", async () => {
        const response = await API.get("/journeys");
        return response.data.data
    })

    return (
        <div className='container'>
            {journeys?.length !== 0 ? (
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {journeys?.map((item, index) => (
                        <div className="col pt-4">
                            <div className="card h-100">
                                <img src={item?.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className='d-flex pb-3'>
                                        <span className='pe-1'><FaRegHeart /></span>
                                        <Link to="/Bookmark">
                                            <span className='pe-1'><FaRegBookmark /></span>
                                        </Link>
                                        {/* <span className='pe-1'><FaHeart /></span>
                                        <span><FaBookmark /></span> */}
                                    </div>
                                    <h5 className="card-title" onClick={() => { navigate(`/DetailJourney/${item?.id}`) }} key={index}>{item?.title}</h5>
                                    {/* <div className='d-flex'>
                                    </div> */}
                                    <p className="card-text">{item?.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            ) : (<div>Tidak ada data yang bisa ditampilkan</div>)}
        </div>
    )
}

export default CardJourney;