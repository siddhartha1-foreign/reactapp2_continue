import React, { Component } from "react";

const NewsItem = (props)=> {
 
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;

    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span
              className=" badge rounded-pill bg-danger"
              
            >
              {source}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://nbcsports.brightspotcdn.com/dims4/default/7f4e648/2147483647/strip/true/crop/5421x3049+0+282/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F4d%2Fa2%2F56162fa24e459cc877fec7aeacf8%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2194482243"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
 
}

export default NewsItem;
