import React from 'react'
import Search from '../atoms/Search'
import CardJourney from '../components/CardJourney';
import Jumbotron from '../components/Jumbotron'

function LandingPage() {
    return (
        <div>
            <Jumbotron />
            {/* <Search /> */}
            <div className='container'>
                <h2 className='text-start py-4 heading-journey'>Journey</h2>
            </div>
            <CardJourney />
        </div>
    )
}

export default LandingPage;