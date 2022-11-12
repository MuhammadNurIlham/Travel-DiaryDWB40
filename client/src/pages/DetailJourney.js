import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import image1 from '../assets/image1.png';
import NavbarAfterLogin from '../components/NavbarAfterLogin';
import { API } from '../config/API';

function DetailJourney() {
    const { id } = useParams()
    let { data: journey } = useQuery("journeyCache", async () => {
        const response = await API.get('/journey/' + id);
        return response.data.data;
    });
    console.log(journey);
    console.log(id);


    return (
        <div>
            <NavbarAfterLogin />
            <div className='container'>
                <div className='row d-flex justify-content-between pt-5'>
                    <div className='col'>
                        <div className="d-flex align-items-center">
                            <div>
                                <h2>{journey?.title}</h2>
                            </div>
                            <div className="ms-auto align-items-center">
                                <p className='fw-bold'>{journey?.user?.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row pb-5'>
                    <div className='d-flex align-items-start'>
                        <h6 className='fw-bold text-info'>17 October 2020</h6>
                    </div>
                </div>
                <div className='row'>
                    <img src={journey?.image} className="img-fluid" alt="yolooo" />
                    <div className='d-flex align-items-start py-5'>
                        <p className='text-start'>{journey?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailJourney