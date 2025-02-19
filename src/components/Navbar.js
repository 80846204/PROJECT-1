import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';


export default function Navbar(props){
  return (
   <nav classNameName={`navbar navbar-expand-lg navbar-${props.mode} bg-dark`}>
   <div classNameName="container-fluid">
    <a classNameName="navbar-brand" href="#">{props.title}</a>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNameName="nav-item">
          {/* <Link classNameName="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li classNameName="nav-item">
          <Link classNameName="nav-link active" aria-current="page" to="/about">aboutText</Link>
        </li> */}
        
        
        
      </ul>
      {/* <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button type="button" className="btn btn-info" >Search</button>
         */}
      {/* </form> */}

      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" for="flexSwitchCheckDefault">Enable Darkmode </label>
      </div>
    </div>
  </div>
</nav>
  )
}


Navbar.propTypes ={
  title: PropTypes.string.isRequired,
  aboutText:PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
};

