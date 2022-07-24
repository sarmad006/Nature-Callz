import React from 'react'
import './Navbar.css'
import search from '../../assets/Images/search.svg'
function Navbar() {
   
    return (
        <>
            <div>
                <div className='nav-hr'></div>
                <nav className="nav nav-pills flex-sm-row">
                    <a className="flex-sm-fill text-sm-center nav-link" href="#"><img src={search} alt='search' style={{ width: '24px' }} /> All</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#"><img src="https://img.icons8.com/ios/24/40C057/xlarge-icons.png" style={{ marginRight: '0.2rem' }} />Images</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#"><img src="https://img.icons8.com/ios/24/40C057/news.png" style={{ marginRight: '0.2rem' }} />News</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#"><img src="https://img.icons8.com/ios/24/40C057/video-call.png" style={{ marginRight: '0.2rem' }} /> Videos </a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#"><img src="https://img.icons8.com/ios/24/40C057/marker--v1.png" style={{ marginRight: '0.2rem' }} />Maps</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">Settings</a>
                </nav>
            </div>
        </>
    );
}

export default Navbar;