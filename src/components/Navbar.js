import React from 'react';
import { Link } from 'react-router-dom';;
export default function Navbar(props){

  
    return(
      <>
        <nav className={`navbar navbar-expand-lg -${props.mymode} bg-${props.mymode}`}> {/* use ` ` insed of " " and ' ' .add { } for writing jvascript*/}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="#">
              Home
            </Link>
            {/*<Link className="nav-item nav-link" to="/about">
              AboutUs
            </Link>
            <a className="nav-item nav-link" href="/">ContactUs</a>*/}
          </div>
          
        </div>
        <div className="custom-control custom-switch">
           <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
          <label className="custom-control-label" htmlFor="customSwitch1" onClick={props.change} style={{color:props.mymode==='dark'?'white':'black'}} >{props.themetext1}</label>
      </div>
      <div className="custom-control custom-switch mx-2">
           <input type="checkbox" className="custom-control-input" id="customSwitch2"/>
          <label className="custom-control-label" htmlFor="customSwitch1" onClick={props.change1} style={{color:props.mymode==='dark'?'white':'black'}} >{props.themetext2}</label>
      </div>
      <div className="custom-control custom-switch">
           <input type="checkbox" className="custom-control-input" id="customSwitch3"/>
          <label className="custom-control-label" htmlFor="customSwitch1" onClick={props.change2} style={{color:props.mymode==='dark'?'white':'black'}} >{props.themetext3}</label>
      </div>
      </nav>
      
      </>
      
    );
}
/*
Navbar.defaultProps={
    name:"WelcomeHome"
}*/