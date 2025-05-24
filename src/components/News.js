import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
  }, [props.category]);

  useEffect(() => {
    updateNews(1);
  }, []);

  const updateNews = async (pageNo) => {
    props.setProgress(10);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}`;
    try {
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setPage(pageNo);
      setLoading(false);
      props.setProgress(100);
      console.log(parsedData.articles.length+"---"+"aa");
      
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
    finally {
    setLoading(false); // ✅ Ensures spinner is hidden
  }
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
    try {
      const data = await fetch(url);
      const parsedData = await data.json();
    
      if(parsedData.articles.length === 0)  // Check if no articles were returned
      {
           setLoading(false);
      }
      else{
             setArticles(articles.concat(parsedData.articles));
             setTotalResults(parsedData.totalResults);
             setPage(nextPage);
             setLoading(false);
      }
    } catch (error) {
      console.error("Error loading more data:", error);
      setLoading(false); 
    }
    finally {
    setLoading(false); // ✅ This ensures the spinner stops regardless
  }
  };

  return (
    <>
      <h2 className="text-center" style={{ margin: "35px 0px",marginTop:'90px' }}>
        NewsMonkey - Top Headlines from {capitalizeFirstLetter(props.category)}
      </h2>
      {/* {loading && <Spinner />} */}
    {loading ? (
  <Spinner />
) : (
  <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length < totalResults}
    loader={<Spinner />}
  >
    <div className="container">
      <div className="row">
        {articles.map((element) => (
          <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title ? element.title.slice(0, 45) : ""}
              description={element.description ? element.description.slice(0, 88) : ""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
              source={element.source.name}
            />
          </div>
        ))}
      </div>
    </div>
  </InfiniteScroll>
)}

    </>
  );
};

News.defaultProps = {
  pageSize: 8,
  country: "us",
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
