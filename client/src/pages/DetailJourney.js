import React from 'react';
import image1 from '../assets/image1.png';

function DetailJourney() {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-between pt-5'>
                <div className='col'>
                    <div className="d-flex align-items-center">
                        <div>
                            <h2>Bersemayam di tanah Dewata</h2>
                        </div>
                        <div className="ms-auto align-items-center">
                            <p className='fw-bold'>Namanya Fadhil</p>
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
                <img src={image1} className="img-fluid" alt="yolooo" />
                <div className='d-flex align-items-start py-5'>
                    <p className='text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique libero, nisi autem, beatae maiores incidunt iure saepe, ducimus velit magnam nobis. Magni explicabo tempora nostrum reprehenderit accusantium quia laborum dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi sapiente distinctio quidem nisi quaerat facere? Fuga, labore earum? Tempora blanditiis modi animi odit quidem aut iste! Incidunt, corrupti ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non pariatur deleniti assumenda voluptates aperiam quo sed? Quibusdam ipsum similique, reiciendis unde et perferendis vitae voluptatem adipisci nisi quidem fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eligendi, suscipit sapiente perspiciatis veritatis nihil officia accusantium in ad hic vel vitae a eos animi doloremque sit rerum, ullam molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod necessitatibus quisquam ipsam libero blanditiis consequatur minima rem deserunt quo animi laborum, ratione a enim reprehenderit unde, dignissimos repellat corporis adipisci?</p>
                </div>
            </div>
        </div>
    )
}

export default DetailJourney