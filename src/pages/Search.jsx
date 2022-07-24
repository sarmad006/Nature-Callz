import React from 'react'
import ProfileSearch from '../componenets/ProfileSearch/Profile'
import Main from '../componenets/Search/Main/Main'
import FooterSearch from '../componenets/FooterSearch/Footer'
const Home = (props) => {
  return (
      <div> 
         <ProfileSearch searchCount={props.searchCount} setSearchCount={props.setSearchCount}/>
         <Main />
         <FooterSearch />
      </div>
  )
}

export default Home