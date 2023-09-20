import React, { Component } from 'react'
import { Navbar } from "./Components/Navbar"
import News from './Components/News'

import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import NewPage from './Components/NewPage';
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar title="NewsMonkeyy"/>
        <home ></home>
        <Routes>
        <Route path="/" element={<News/>} ></Route>
          <Route path="/sports" element={<News pageSize={10} country='in' category='sport'/>}></Route>
          <Route path="/About us" element={<News pageSize={10} country='in' category='sport'/>}></Route>
          <Route path="/entertainment" element={<News pageSize={10} country='in' category='entertainment'/>}></Route>
          <Route path="/general" element={<News pageSize={10} country='in' category='general'/>}></Route>
          <Route path="/health" element={<News pageSize={10} country='in' category='health'/>}></Route>
          <Route path="/science" element={<News pageSize={10} country='in' category='science'/>}></Route>
          <Route path="/business" element={<News pageSize={10} country='in' category='business'/>}></Route>
          <Route path="/technology" element={<News pageSize={10} country='in' category='technology'/>}></Route>
          <Route path="/newpage" element={<NewPage/>}></Route>
          </Routes>
          </Router> 
         
      </div>
    )
  }
}

export default App
