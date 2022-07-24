import React from 'react'
import Profile from '../componenets/Profile/Profile'
import HomeContent from '../componenets/Home/HomeContent'
import Footer from "../componenets/Footer/Footer"
export const Home = (props) => {
  return (
    <>
        <Profile searchCount={props.searchCount} setSearchCount={props.setSearchCount}/>
        <HomeContent/>
        <Footer/>
    </>
  )
}
