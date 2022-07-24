import React, { useEffect, useState } from "react";
import "./Main/Main.css";
const Videos = (props) => {
    // const [contentData, setContentData] = useState([]);
    // const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

    const [totalPages, setTotalPages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalData, setTotalData] = useState('')


    var perPage = 10;
    var page = 1;

    // main function to get data
    const callbackFunction = (results) => {
        // for add content
    document.getElementById('all-videos').innerHTML = "";
        
        if (results) {
            setLoading(false)
        }

        setTotalData( results.videos.length)
        let totalPages = Math.ceil( results.videos.length / perPage)
        // console.log(totalPages)
        setTotalPages(totalPages)
        var index = page * perPage - perPage
        const allData =  results.videos.slice(index, index + perPage)
        // console.log(results.organic.length

        // all videos
        // all videos
        allData.forEach((allvideos) => {
        const newDiv = document.createElement("div");
        newDiv.className = "search-allvideos";
        const url = allvideos.url;
        var res = url.split("=");
        var embeddedUrl = "https://www.youtube.com/embed/" + res[1];
        if (embeddedUrl) {
          const div = document.createElement("div");
          div.innerHTML = `<div class="video-frame row"><a class="col-sm-3" target="blank" href="${allvideos.url}"><div class="thumbnail"><img src="${allvideos.thumbnailUrl}"><p class="duration"><svg data-v-41048bd2="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-test-id="duration-tag-icon" class="duration-tag__icon icon icon--icon-play icon--size-s"><path data-v-41048bd2="" fill-rule="evenodd" clip-rule="evenodd" d="M5.687 11.777L11.091 8.6a.669.669 0 000-1.153L5.687 4.268a.669.669 0 00-1.007.576V11.2c0 .517.561.838 1.007.576zm6.082-2.026c1.318-.775 1.318-2.682 0-3.457L6.365 3.115c-1.337-.786-3.022.178-3.022 1.729V11.2c0 1.551 1.685 2.515 3.022 1.729l5.404-3.179z" fill="currentColor"></path></svg> ${allvideos.duration}</p></div></a><div class="col-sm-9"><h6>${allvideos.publisher} - ${allvideos.formattedDate}</h6><a class="video-name" target="blank" href="${allvideos.url}">${allvideos.name}</a><p class="video-description">${allvideos.description}</p></div></div>`;
          newDiv.appendChild(div);
        }
        document.getElementById("all-videos").append(newDiv);
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
                    ad: 0,
                },
            },
        ],
        feedsResults: {
            feeds: {
                videos: 100,
            },
            callback: callbackFunction,
        },
        searchTerm: props.text,
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
    }, []);

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
            <div className="col-md-12">
                <div id="all-videos"></div>
                {totalData >= perPage ?
                    <>
                        <div className="pagination my-5 d-flex align-items-center">
                            {[...Array(totalPages)].map((index, pageNumber) => {
                                return <button className={currentPage === pageNumber + 1 ? 'pagination-btn active' : 'pagination-btn'} disabled={currentPage === pageNumber + 1 ? 'disabled' : ''} onClick={() => { GoToPage(pageNumber + 1) }} key={pageNumber}>{pageNumber + 1}</button>
                            })}
                            {/* <button className={currentPage === totalPages ? 'pagination-btn active' : 'pagination-btn next'} disabled={currentPage === totalPages ? 'disabled' : ''} onClick={ShowNext} >Next</button> */}
                        </div>
                    </> : ''}
            </div>

        </>
    );
};

export default Videos;
