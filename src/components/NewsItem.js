import React from 'react'

const NewsItem = (props) => {

  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl == null ? "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE" : imageUrl} className="card-img-top" alt="IMAGE NOT FOUND" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <h5><span className="badge bg-primary">{source}</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author == null ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem