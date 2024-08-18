import React, { Component } from 'react'
import Nav from './Nav';
import News from './News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from './Spinner';

export default class App extends Component {
   c="shubham";
  render() {
   
    return (
      <div>
       {/* <p> this is class base comp as this is extends Component and use render method to render </p>
       <p>My self {this.c}</p> */}
       <Nav/>

       {/* <News/> */}

       <BrowserRouter>
      <Routes>
      <Route exact path=""  element={<News country="in"  category=""  tit={"General"} />}></Route>
        <Route exact path="sports"  element={<News  country="in" key={"sports"} tit={"Sports"}  category="sports" />}>
          
        </Route>

        <Route exact path="business"  element={<News  country="in" key={"business"}  tit={"Business"} category="business" />}>
          
          </Route>


          <Route exact path="science"  element={<News  country="in" key={"science"} tit={"Sciences"}  category="science" />}>
          
          </Route>
      </Routes>
    </BrowserRouter>
       

      </div>
    )
  }
}
