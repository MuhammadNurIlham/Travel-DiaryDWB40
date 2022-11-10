import React from 'react'
import Search from '../atoms/Search'
import CardJourney from '../components/CardJourney';
import Jumbotron from '../components/Jumbotron'

function LandingPage() {
    return (
        <div>
            <Jumbotron />
            <Search />
            <CardJourney />
        </div>
    )
}

export default LandingPage;