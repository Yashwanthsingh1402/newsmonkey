import React, { Component } from 'react'

export class Newsitems extends Component {
  
  handleClick = () => {
    this.setState({ showImage: true });
  };

  render() {
    let { title, desc ,urlimg,newsUrl} = this.props;
    

    return (
      <div>
        <div className="card" style={{
        height: 'auto',
        width: '200px',
      }}>
          <img src={urlimg} className='card-img-top' alt="imgss" width={10} />
          <div className="card-body" >
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{desc}...</p>
            <a href={newsUrl} className="btn btn-danger mx-auto p-10" >
              Read More
            </a>
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default Newsitems;
