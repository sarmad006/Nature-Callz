import React, { useEffect, useState } from "react";
import "./Main.css";
import '../../Navbar/Navbar.css'
import search from "../../../assets/Images/search.svg";
import { useParams, useLocation, NavLink } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import logo from "../../../assets/Images/loggo.png";
import axios from 'axios';
import Images from '../Images'
import News from '../News'
import Videos from '../Videos'

const Main = () => {
  var { text } = useParams();
  const location = useLocation();
  const [apiFirstData, setApiFirstData] = useState("");
  // const [contentData, setContentData] = useState([]);
  // const [page, setPage] = useState(1);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState([])
  const [apiContent, setApiContent] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalData, setTotalData] = useState('')


  var perPage = 10;
  var page = 1;

  // main function to get data
  const callbackFunction = (results) => {
    // for add content
    document.getElementById("hybrid").innerHTML = '';
    document.getElementById('images').innerHTML = "";

    if (results) {
      setLoading(false)
    }
    // CHECK IF IMAGE EXISTS
    function checkIfImageExists(url, callback) {
      const img = new Image();
      img.src = url;

      if (img.complete) {
        callback(true);
      } else {
        img.onload = () => {
          callback(true);
        };

        img.onerror = () => {
          callback(false);
        };
      }
    }

   
    // get description of first results
    setApiFirstData(results.organic[0].description);


    let Mainresults = [
      ...results.organic,
      ...results.organic
    ];
    // var Mainresults = results.organic.length
    // console.log(Mainresults.length)
    // for all tab
    setTotalData(Mainresults.length)
    let totalPages = Math.ceil(Mainresults.length / perPage)
    // console.log(totalPages)
    setTotalPages(totalPages)
    var index = page * perPage - perPage
    const allData = Mainresults.slice(index, index + perPage)
    // console.log(results.organic.length)
    allData.forEach((data) => {
      const newDiv = document.createElement("div");
      newDiv.className = "organic";
      // const onClickFunc = window.AdsApi.handleOnClick;
      const UrlString = data.url;
      const SearchResultsUrl = UrlString.replace(/<[^>]*>?/gm, "");
      if (UrlString) {
        const div = document.createElement("div");
        div.innerHTML = `
        <h4 class="title"><a href="${data.displayUrl || data.hostPageDisplayUrl || SearchResultsUrl
          }" target="blank" class="web-title-url">${data.title || data.name
          }</a></h4>
        <a href="${SearchResultsUrl}" target="blank" class="web-url">${data.displayUrl || data.hostPageDisplayUrl || SearchResultsUrl
          }</a>
                ${data.description ? `<p>${data.description}</p><br>` : ""}
                
                `;
        newDiv.appendChild(div);
        const hr = document.createElement("hr");
        newDiv.appendChild(hr);
      }
      document.getElementById("hybrid").append(newDiv);
      // setContentData((pre) => [newDiv, ...pre]);
    });

    // for images
    const image = results.images[0];
    // console.log(image)
    const newDiv = document.createElement("div");
      newDiv.className = "search-image";
      const ImageUrl = image.url;
      // axios.get(ImageUrl)
      checkIfImageExists(ImageUrl, (exists) => {
        if (exists) {
          const div = document.createElement("div");
          div.innerHTML = `<a href="${image.displayUrl || image.contentUrl || ImageUrl
            }" target="blank"><img src="${image.displayUrl || image.contentUrl || ImageUrl
            }" class="ad-image"></a>`;
          newDiv.appendChild(div);
          document.getElementById("images").append(newDiv);
        }
      });
    
  };

  const config = {
    spots: [
      {
        id: "ad",
        sectionId: "SCC901C91DC92A",
        template: {
          name: "suclean",
          theme: "default",
        },
        feeds: {
          ad: 5,
        },
      },
    ],
    feedsResults: {
      feeds: {
        organic: 100,
        images: 5,
      },
      callback: callbackFunction,
    },
    searchTerm: text,
    qc: "Search",
    aflt: "bxl_dpphxnih9bdfhjlrxikmoqsu2mj_00_00",
  };

  const init = async () => {
    // window.AdsApi = new window.HotspotsAPI("4AE57A5FB55D");
    const ApiInstance = new window.HotspotsAPI("4AE57A5FB55D")
    // const adsResultsInstance = await AdsApi.showSearchPage(config);
    const resultsInstance = await ApiInstance.showSearchPage(config)
    // resultsInstance.event('paging', {
    //   'pageNumber': page,
    //   'cbFunction': callbackFunction
    // });
  };

  useEffect(() => {
    init();
  }, [location]);

  const GoToPage = pageNumber => {
    page = pageNumber
    setCurrentPage(page)
    init()
  }
  // const ShowNext = () => {
  //   page = page + 1
  //   setCurrentPage(page)
  //   console.log(page)
  //   init()
  // }

  return (
    <>
      <div className="container">
        <nav className="top-nav">
          <button className={step === 1 ? 'menu text-sm-center active' : 'menu text-sm-center'} onClick={() => { setStep(1) }}><img src={search} alt='search' />All</button>
          <button className={step === 2 ? 'menu text-sm-center active' : 'menu text-sm-center'} onClick={() => { setStep(2) }}><img src="https://img.icons8.com/ios/24/40C057/xlarge-icons.png" />Images</button>
          <button className={step === 3 ? 'menu text-sm-center active' : 'menu text-sm-center'} onClick={() => { setStep(3) }}><img src="https://img.icons8.com/ios/24/40C057/news.png" />News</button>
          <button className={step === 4 ? 'menu text-sm-center active' : 'menu text-sm-center'} onClick={() => { setStep(4) }}><img src="https://img.icons8.com/ios/24/40C057/video-call.png" />Videos </button>
          <button className="menu text-sm-center nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">Settings</button>
        </nav>
        <div className='nav-hr'></div>

      </div>
      <div className="main-search">
        <div className="container">
          {loading ? <>
            <div className="loader"></div>
          </> : ''}
          {/* step 1 */}
          <div className={step === 1 ? 'row' : 'd-none row'}>
            <div className="col-md-8">
              <div className="cards">
                {/* main ads */}
                <div id="ad" className="ad"></div>
                {/* main ads content */}
                <div id="hybrid" className="hybrid"></div>
                {totalData >= perPage ?
                  <>
                    <div className="pagination my-5 d-flex align-items-center">
                      {[...Array(totalPages)].map((index, pageNumber) => {
                        return <button className={currentPage === pageNumber + 1 ? 'pagination-btn active' : 'pagination-btn'} disabled={currentPage === pageNumber + 1 ? 'disabled' : ''} onClick={() => { GoToPage(pageNumber + 1) }} key={pageNumber}>{pageNumber + 1}</button>
                      })}
                      {/* <button className={currentPage === totalPages ? 'pagination-btn active' : 'pagination-btn next'} disabled={currentPage === totalPages ? 'disabled' : ''} onClick={ShowNext} >Next</button> */}
                    </div>
                  </> : ''}
                <div className="results-by-bing my-3">
                  <a
                    href="https://privacy.microsoft.com/en-us/privacystatement"
                    target="blank"
                  >
                    Results by Bing
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="right-content-image-desc">
                <div id="images"></div>
                {/* <img src={cactus} alt="cactus" /> */}
                <div className="">
                  <h2 className="main-head">{text}</h2>
                  <div dangerouslySetInnerHTML={{ __html: apiFirstData }}></div>
                </div>
              </div>
            </div>
          </div>
          {/* step 2 */}
          <div className={step === 2 ? 'row' : 'd-none row'}>
            <Images text={text} />
          </div>
          {/* step 3 */}
          <div className={step === 3 ? 'row' : 'd-none row'}>
            <News text={text} />
          </div>
          {/* step 3 */}
          <div className={step === 4 ? 'row' : 'd-none row'}>
            <Videos text={text} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
