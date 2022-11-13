import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../config/API';
import Swal from 'sweetalert2';
import { FaBookmark } from "react-icons/fa"
import { FaRegBookmark } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"

import image1 from '../assets/image1.png'
import { UserContext } from '../context/UserContext';

function CardJourney() {
    let navigate = useNavigate();

    const [state] = useContext(UserContext);
    const isLogin = state.isLogin;
    console.log("state buat bookmark euy", state);

    let { data: journeys } = useQuery("journeysCache", async () => {
        const response = await API.get("/journeys");
        console.log("ini response journeys", response)
        const resultResponse = response.data.data;
        console.log("ini result response", resultResponse)
        return response.data.data
    })

    const handleOnBookmark = async (e, journeyID) => {
        e.preventDefault();
        try {
            console.log("mau bookmark yang ini :", state.user.id)

            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            };
            console.log("data check journey", journeyID, state.user.id);

            const response = await API.post("/bookmark", {
                journey_id: parseInt(journeyID),
                user_id: parseInt(state.user.id),
            }, config);
            console.log("response post bookmark euy", response)
        } catch (error) {
            console.log("ini error di post bookmark", error)
        }
    }

    return (
        <div className='container'>
            {journeys?.length !== 0 ? (
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {journeys?.map((journey, index) => (
                        <div className="col pt-4" key={index}>
                            <div className="card h-100">
                                <img src={journey?.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    {isLogin ? (
                                        <div className='d-flex pb-3'>
                                            <span className='pe-1'><FaRegHeart /></span>
                                            <span className='pe-1' onClick={(e) => {
                                                Swal.fire({
                                                    title: 'Do you want to save this journey?',
                                                    showDenyButton: true,
                                                    showCancelButton: true,
                                                    confirmButtonText: 'Save',
                                                    denyButtonText: `Don't save`,
                                                }).then((result) => {
                                                    /* Read more about isConfirmed, isDenied below */
                                                    if (result.isConfirmed) {
                                                        Swal.fire({
                                                            icon: "success",
                                                            title: "Success!",
                                                            showConfirmButton: true,
                                                            onClick: handleOnBookmark(e, journey.id),
                                                        });
                                                    } else if (result.isDenied) {
                                                        Swal.fire('Journey are not saved', '', 'info')
                                                    }
                                                })
                                            }}><FaRegBookmark /></span>
                                            {/* <Link to="/Bookmark">
                                        </Link> */}
                                            {/* <span className='pe-1'><FaHeart /></span>
                                        <span><FaBookmark /></span> */}
                                        </div>
                                    ) : (
                                        <div className='d-flex pb-3'>
                                            <span className='pe-1'><FaRegHeart /></span>
                                            <span className='pe-1' onClick={(e) => {
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Oops...',
                                                    text: 'Anda Belum Login, Silahkan Login!',
                                                })
                                            }}><FaRegBookmark /></span>
                                            {/* <Link to="/Bookmark">
                                        </Link> */}
                                            {/* <span className='pe-1'><FaHeart /></span>
                                        <span><FaBookmark /></span> */}
                                        </div>
                                    )}
                                    <h5 className="card-title" onClick={() => { navigate(`/DetailJourney/${journey?.id}`) }} key={index}>{journey?.title}</h5>
                                    {/* <div className='d-flex'>
                                    </div> */}
                                    <p className="card-text">{journey?.description}</p>
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