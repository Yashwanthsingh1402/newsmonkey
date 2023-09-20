import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Load from './Load';
import PropTypes from 'prop-types'

import { json } from 'react-router-dom';
import { parse } from '@fortawesome/fontawesome-svg-core';
import { propTypes } from 'react-bootstrap/esm/Image';
export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  constructor(){
    super();
    console.log("This is a constructor...")
    this.state={
      articles: [],
      loading: false,
      page:1
    }
}
 async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbf9197b3d8c49328cfd20a0253c3b5b&page=1&pageSize=${this.props.pageSize}`
  this.setState({loading:true});
  let data= await fetch(url);
  let parsedData= await data.json()
  console.log(parsedData)
  this.setState({articles: parsedData.articles,loading:false})
}
handleNext=async ()=>{
  console.log("Next")
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbf9197b3d8c49328cfd20a0253c3b5b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
  this.setState({loading:true});
  let data= await fetch(url);
  let parsedData= await data.json()
  console.log(parsedData)
  
  this.setState({
    page:this.state.page+1,articles: parsedData.articles,
    loading:false
  }
  )
}
handlePrevious=async ()=>{
  console.log("Previous")
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbf9197b3d8c49328cfd20a0253c3b5b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
  let data= await fetch(url);
  let parsedData= await data.json()
  console.log(parsedData)
  
  this.setState({
    page:this.state.page-1,articles: parsedData.articles
  }
  )
}
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News Everywhere</h1>
        {this.state.loading&&<Load/>}
        <div className='row'>
          {!this.state.loading&& this.state.articles.map((element)=>{
            return  <div className='col md-3' key={element.url}>
            <Newsitems title={element.title?element.title.slice(0,75):" "} desc={element.description?element.description.slice(0,100):" "} urlimg={element.urlToImage} newsUrl={element.url}/>
          </div>
          }
          )
        }
        
      
      </div>
      <div className='container d-flex justify-content-between'>
        <button type='button' disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevious}>&larr; previous</button>
        <button type='button' className='btn btn-dark' onClick={this.handleNext}>next &rarr;</button>
      </div>
      </div>
    )
  }
}

export default News
