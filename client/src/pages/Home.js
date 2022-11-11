import React from 'react'
import Search from '../atoms/Search';
import CardJourney from '../components/CardJourney'
import NavbarAfterLogin from '../components/NavbarAfterLogin';

function Home() {
    return (
        <div>
            <NavbarAfterLogin />
            <div className='container'>
                <Search />
                <CardJourney />
            </div>
        </div>
    )
}

export default Home;