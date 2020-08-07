import React, { Component } from "react";
import { Link } from "gatsby";


export default class footer extends Component {
  render() {
    return (
      <div className="site-footer" id="footer">
        <div style={{"float":"left", color:"#fff", display:"inline-block"}}>
        <Link to="/legal-notice">
          <h4 style={{color:"#fff", align:"center", display:"inline-block", "margin-top":"10px", "margin-left":"1em"}}>Legal Notices</h4>
        </Link>
        <Link to="/privacy">
          <h4 style={{color:"#fff", "margin-left":"2em", display:"inline-block"}}>Privacy and Cookies</h4>
        </Link>
        </div>
        <div style={{"float":"right"}}>
          <h4 style={{color:"#fff", display:"inline-block", "margin-top":"10px", "margin-right":"1em"}}>Copyright 2020 [Our Marketing Company]</h4>
        </div>
      </div>
    );
  }
}
