import React from 'react'
import CardJourney from '../components/CardJourney'
import NavbarAfterLogin from '../components/NavbarAfterLogin';

function Bookmark() {
    return (
        <div>
            <NavbarAfterLogin />
            <div className='container'>
                <h2 className='text-start py-4 heading-journey'>Bookmark</h2>
                <CardJourney />
            </div>
        </div>
    )
}

export default Bookmark;