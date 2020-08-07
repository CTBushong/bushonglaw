import React, { Component } from "react";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import AccountBalance from "@material-ui/icons/AccountBalance";


export default class service extends Component {
  render() {
    return (
      <div className="service section" id="Service">
        <div className="container">
          <div className="section-head">
            <h2>What I Do Really Well</h2>
          </div>
          <div>
          As your tax and legal advisor, it's my job to help structure your business and investments 
          so that you pay as little tax and face as little risk as possible. My goal is for my clients to 
          have the confidence and peace of mind to focus on what they do best.
          </div>
          <div>
          
            <div className="row">
             
                  <div className="service-main col-md-4">
                    <AccountBalance style={{ fontSize: 60, color: "#0a35c4", paddingBottom: 15 }}/>
                    <h3>Tax Planning</h3>
                    <div>
                      Are you using every tool at yor disposal to compete with the most tax-efficient 
                      enterprises in the world? Let's find out how much more you should be taking home.
                    </div>
                  </div>
             
            
                  <div className="service-main col-md-4">
                    <VerifiedUser style={{ fontSize: 60, color: "#08a623", paddingBottom: 15 }}/>  
                    <h3>Business Law</h3>
                      <div>
                      The last thing you want to worry about is legal documents and regulatory compliance. 
                      Running your business is simpler when all you have to worry about is running your business.
                      </div>
                  </div>
             
            
                  <div className="service-main col-md-4">
                      <Chat style={{ fontSize: 60, color: "#e32d39", paddingBottom: 15 }}/>
                      <h3>Expert Co-Counsel</h3>
                      <div>
                      Great attorneys are great at what they do, but they know when to bring in outside expertise. 
                      I work with professionals from many practice areas and many locations around the world.
                      </div>
                  </div>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}
