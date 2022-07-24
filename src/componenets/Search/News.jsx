import React, { useEffect, useState } from "react";
import "./Main/Main.css";
const News = (props) => {
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
    document.getElementById('all-news').innerHTML = "";
        
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

        console.log( results.news.length)
        setTotalData( results.news.length)
        let totalPages = Math.ceil( results.news.length / perPage)
        // console.log(totalPages)
        setTotalPages(totalPages)
        var index = page * perPage - perPage
        const allData =  results.news.slice(index, index + perPage)
        // console.log(results.organic.length

        // all news
        allData.forEach((allnews) => {
        const newDiv = document.createElement("div");
        newDiv.className = "search-allnews";
        const url = allnews.url;
        if (url) {
          const div = document.createElement("div");
          div.innerHTML = `<div class="row"><div class="col-sm-12 "><h6>${allnews.provider[0].name} - ${allnews.formattedDate}</h6><a href="${url}" target="blank"><h4 class="name">${allnews.name}</h4></a><p>${allnews.description}</p></div></div>`;
          newDiv.appendChild(div);
        }
        document.getElementById("all-news").append(newDiv);
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
                news: 100,
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
                <div id="all-news"></div>
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

export default News;
