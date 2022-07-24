import React, { useState, useEffect } from "react";
import "./Profile.css";
import flower from "../../assets/Images/flower.png";
import loggo from "../../assets/Images/loggo.png";
import search from "../../assets/Images/search.svg";
import menu from "../../assets/Images/menu.svg";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

const Profile = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchTextError, setSearchTextError] = useState(false);
  const [autoSuggest, setautoSuggest] = useState(false);
   const [Suggestion,SetSuggestion]=useState([]);
  const [searchCount, setSearchCount] = useState('');
  // console.log(props.searchCount)
  const history = useNavigate();



  const getAllSuggestions = async (string) => {
    const searchURL = "https://cors-anywhere.herokuapp.com/https://sugg.search.yahoo.net/sg/?output=json&nresults=3&command=";
     await axios.get(searchURL+ encodeURIComponent(string))
      .then(res => {
        if(res.status==200 )
        { // console.log(res.data.gossip.results);
          const result=res.data.gossip.results;
          SetSuggestion(result);
          setautoSuggest(true);
        }
      }).catch(err=> 
        {
        console.log(err)
       })
       }
  
 const submitForm = (e) => {

    e.preventDefault();
    if (searchText.length === 0) {
      setSearchTextError(true);
    } else {
      // window.location.replace(`/search/q=${searchText}`)
      document.getElementById('hybrid').innerHTML = "";
      document.getElementById('images').innerHTML = "";
      setautoSuggest(false);
      history(`/search/q=${searchText}`
      ); 
      //convert string to integer
      let search = parseInt(localStorage.getItem("search")); 
      if(search){
        localStorage.setItem('search', search+1)
        console.log('yes')
      } else {
        localStorage.setItem('search', 1)
        console.log('no')
      }
      let NewSearchCount = parseInt(localStorage.getItem("search")); 
      setSearchCount(NewSearchCount)
      console.log(searchCount); 
    }
  };
  var { text } = useParams();

  const searchTextChange = async (val) => {
    await getAllSuggestions(val);
    setSearchText(val);
  }

  useEffect(()=>{
    let search = parseInt(localStorage.getItem("search")); 
      if(search){
        setSearchCount(search)
      }
  })
  return (
    <>
      <div className="sticky-top bg-white">
        <div className="container">
          <nav className="navbar bg-custom sticky-top">
            <NavLink className="navbar-brand" to="/">
              <img src={loggo} alt="logo" />
            </NavLink>
            {/* Search bar  */}

            <div
              className={
                searchTextError
                  ? "error d-flex ml-1 navbar-form"
                  : "d-flex ml-1 navbar-form"
              }
              role="search"
            >
              <form onSubmit={submitForm} className="w-100 d-flex">
              <input
                className="form-control me-2 input-search"
                type="search"
                placeholder={text ? `${text}` : "Search the web to help nature"}
                aria-label="Search"
                onChange={(e) => searchTextChange(e.target.value)}
                value={searchText}
              />
                <button
                  className="btn my-btn "
                  type="submit"
                  onClick={submitForm}
                >
                  <img src={search} alt="" style={{ width: "22px" }} />
                </button>
              </form>
              {autoSuggest ? <>
                <div className="auto-suggest">
                  {Suggestion && Suggestion.map((suggestion,index)=>
                  (
                  <div key={index} className="item d-flex " onClick={()=>setSearchText(suggestion.key)}>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="20" height="20"
                        viewBox="0 0 50 50"
                        ><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                      </svg>
                    </div>
                    <p >{suggestion.key}</p>
                  </div>
                  ))}
                 
                </div>
              </> : ''}
            </div>

            {/* Search bar ends */}

            <div className="flower-icon">
              {/* flower */}
              <div className="flower">
                <img
                  src="/img/flower.png"
                  style={{ width: "40px", marginTop: "-25px" }}
                  alt="flower"
                />
                <span className="number" style={{ marginTop: "-10px" }}>
                  {searchCount}
                </span>
              </div>
              {/* flower html ends */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon">
                  <img
                    src={menu}
                    alt="toogle-icon"
                    className="toggle-offcanva"
                  />
                </span>
              </button>
            </div>
          </nav>
          {/* Search bar  */}
          <div className="mobile-search">
            <div
              className={
                searchTextError
                  ? "error d-flex ml-1 navbar-form mx-auto"
                  : "d-flex ml-1 navbar-form mx-auto"
              }
              role="search"
            >
              <form onSubmit={submitForm} className="w-100 d-flex">
                <input
                  className="form-control me-2 input-search"
                  type="search"
                  placeholder="Search the web to help nature"
                  aria-label="Search"
                  onChange={searchTextChange}
                  defaultValue={text}
                />
                <button
                  className="btn my-btn "
                  type="submit"
                  onClick={submitForm}
                >
                  <img src={search} alt="" style={{ width: "22px" }} />
                </button>
              </form>
              {autoSuggest ? <>
                <div className="auto-suggest">
                  <div className="item d-flex">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="20" height="20"
                        viewBox="0 0 50 50"
                        ><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                      </svg>
                    </div>
                    <p>Nature</p>
                  </div>
                  <div className="item d-flex">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="20" height="20"
                        viewBox="0 0 50 50"
                        ><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                      </svg>
                    </div>
                    <p>Nature</p>
                  </div>
                  <div className="item d-flex">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="20" height="20"
                        viewBox="0 0 50 50"
                        ><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                      </svg>
                    </div>
                    <p>Nature</p>
                  </div>
                </div>
              </> : ''}
            </div>

          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            <NavLink className="navbar-brand" to="/">
              <img src={loggo} alt="logo" />
            </NavLink>
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/privacy-policy'}>Privacy Policy</NavLink></li>
            <li><NavLink to={'/terms-and-conditions'}>Terms of Use</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
