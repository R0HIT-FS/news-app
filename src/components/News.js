import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=>{
        const [articles, setarticles] = useState([])
        const [loading, setloading] = useState(false)
        const [page, setpage] = useState(1)
        const [totalResults, settotalResults] = useState(0)
        
        
        const Update=async()=> {
            props.setprogress(10);
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`
            setloading(true);
            let data = await fetch(url)
            props.setprogress(40);
            let JsonData = await data.json();
            props.setprogress(75);
            setarticles(JsonData.articles)
            settotalResults(JsonData.totalResults)
            setloading(false)
            props.setprogress(100)
            
        }
        useEffect(() => {
            document.title = `NEWS - ${props.category}`;
            Update()
    }, [])
    
    const fetchMoreData = async() => {
        setpage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        setloading(true)
        let data = await fetch(url)
        let JsonData = await data.json();
        setarticles(articles.concat(JsonData.articles))
        settotalResults(JsonData.totalResults)
        setloading(false)
    };

        return (
            <div>
                <div className="container my-3">
                    <h1 className='text-center' style={{marginTop:"75px"}}>{(`NEWS - ${(props.category)}`).toUpperCase()} HEADLINES</h1>
                    
                    <InfiniteScroll
                        dataLength = {articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Loading />}
                        style={{overflow:'hidden'}}
                    >
                        <div className="container">

                            <div className="row">
                                {articles.map((element) => {
                                    return <div className="col-md-4 d-flex my-3 justify-content-center " key={element.url}>
                                        <NewsItem title={element.title == null ? "No title" : element.title} description={element.description == null ? "" : element.description.slice(0, 80)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                                    </div>
                                })}

                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        )
    
}

News.defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News