import React from 'react'
import './Footer.css'
import loggo from '../../assets/Images/loggo.png'
import fbicon from '../../assets/Images/fbicon.svg'
import twittericon from '../../assets/Images/twittericon.svg'
import inicon from '../../assets/Images/inicon.svg'
import pinicon from '../../assets/Images/pinicon.svg'
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div>
                <footer>
                    <hr />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 footer-col">
                                <div>
                                    <h3 style={{ textAlign: 'center', marginBottom: '70px', marginTop: '-55px' }}><img src={loggo} alt="" style={{ width: '110px' }} /></h3>
                                    <div className="section-1-icons">
                                        <img src={fbicon} alt="facebook icon" />
                                        <img src={twittericon} alt="twitter icon" />
                                        <img src={inicon} alt="linkedin icon" />
                                        <img src={pinicon} alt="Pinterest Icon" />
                                        <img src="https://img.icons8.com/ios-glyphs/60/40C057/rss.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 footer-col">
                                <div>
                                    <h3>Site Map </h3>
                                    <div className='section-1-links'>
                                        <a href="#">How Naturecallz work</a>
                                        <NavLink to="/about">About</NavLink>
                                        <a href="#">Mobile App</a>
                                        <a href="/privacy-policy">Privacy</a>
                                        <a href="#">Settings</a>
                                        <a href="#">Feedback</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4 col-sm-12 footer-col last-col">
                                <div>
                                    <h3>Resources</h3>
                                    <div className='section-1-links'>
                                        <a href="#">Help</a>
                                        <a href="#">Financial Reports</a>
                                        <a href="#">Blog</a>
                                        <a href="#">Press</a>
                                        <a href="#">Careers</a>
                                        <a href="#">Treecard</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='fotter-bottom-container'>
                            <div><p>Copyright <span style={{ color: 'green', fontWeight:'500' }} >@OSAds..</span>All Rights Reserved</p></div>
                            <div> <p><NavLink to='/terms-and-conditions'>Terms of Use </NavLink> | <NavLink to='/privacy-policy'> Privacy Policy</NavLink></p></div>
                        </div>
                    </div>

                </footer>

            </div>

        </>
    )
}

export default Footer