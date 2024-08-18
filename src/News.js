import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';
import './NewsItems.css';
import Spinner from './Spinner';


const News = (props) => {
  const [articles, setArticles] = useState([]);
  let {country, category}=props;

  const [page, setpage]=useState(1);
  const [spin, setspin]=useState(true);



  useEffect(() => {
    const fetchNews = async () => {


        const url = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4971b251f169463bb4ec4c28c2a6fc9e&pageSize=10&page=${page}`);
       
        const data = await url.json();
        console.log(data);
        setArticles(data.articles);
        setspin(false);
     
    };



    fetchNews();
  }, []); // Empty dependency array ensures this effect runs only once after component mounts


  const nextfun= async ()=>{
setspin(true);
    console.log("next");
    const url = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4971b251f169463bb4ec4c28c2a6fc9e&pageSize=10&page=${page+1}`);
       
    const data = await url.json();

   
    console.log(data);
    setArticles(data.articles);
    setspin(false);
    setpage(page+1);


      }
    
  
    
      const prvfun= async()=>{
        setspin(true);
    console.log("prev");
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4971b251f169463bb4ec4c28c2a6fc9e&pageSize=10&page=${page-1}`);
       
    const data = await response.json();
    console.log(data);
    setArticles(data.articles);
    setpage(page-1)
    setspin(false);
   
      }

  return (
    <div>

      
      <p style={{marginTop:'60px',  marginLeft:'460px', fontSize:'22px', color:'gray'}}><b>This is today's top {props.tit} news...</b></p>
      {spin ?
      <Spinner/>
     
:<div className='main'>
{articles.map((article, index) => (
  <div key={index}>
    <NewsItems title={article.title?article.title.slice(0,60):"this is default title "} desc={article.description?article.description.slice(0,100):"this is defalut descrip for news"} url={article.urlToImage?article.urlToImage:"2.webp"} urlNews={article.url} />
  </div>
))}
</div>}
      <div className="btn  d-flex justify-content-between fixed-bottom">
<button type="button" class="btn btn-dark" onClick={prvfun}  disabled={page<=1}>Previous</button>
<button type="button" class="btn btn-dark" onClick={nextfun}>Next</button>
</div>

    </div>
  );
};

export default News;
