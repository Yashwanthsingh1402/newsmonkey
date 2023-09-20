import React, { Component } from 'react'
import NewPage from './NewPage';
import { Link } from 'react-router-dom';
export class Navbar extends Component {
  render() {
    let{title}=this.props;
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" to="/">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to="/" target='_.blank'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" target='_.blank'>About us</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/business" target='_.blank'>business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment" target='_.blank'>entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/general" target='_.blank'>general</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health" target='_.blank'>health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science" target='_.blank'>science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports" target='_.blank'>sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology" target='_.blank'>technology</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/newpage" target='_.blank'>New page</Link></li>
        </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
