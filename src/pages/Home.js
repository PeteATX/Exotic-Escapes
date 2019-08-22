import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedGetaways from '../components/FeaturedGetaways';


export default function Home() {
    return (
        <React.Fragment>
     <Hero>
        <Banner title="exotic getaways" subtitle="deluxe rooms starting at $199">
        <Link to='/getaways' className="btn-primary">
            Start Dreaming!
        </Link>
        </Banner>
    </Hero>;
    <Services />
    <FeaturedGetaways />
    
    </React.Fragment>
    )
    
    }

