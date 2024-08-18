import React, { Component } from 'react'

import './NewsItems.css'
export default class ewsItems extends Component {
  render() {
    

    let {title, desc ,url, urlNews, tit} =this.props;
    return (
      <div>

       
      <div >
      <div className="card mx-5 my-3" style={{width:'16rem'}}>
  <img src={url} className="card-img-top" alt="..."/>
 

  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <a href={urlNews} target="_blank" className="btn btn-primary" id='btn'>Read more</a>
  </div>
</div>  
</div>



</div>




     
    )
  }
}
