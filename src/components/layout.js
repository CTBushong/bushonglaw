import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./header";
import Footer from "./footer";

import "../css/style.css";
import "../css/font-awesome.css";
import Modal from 'react-modal'

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children, header }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        contentfulSiteInformation {
          siteName
          siteDescription
          logo {
            file {
              url
            }
          }
          menus
        }
      }
    `}
    
    render={data => (
      <>
        <Header
          data={data.contentfulSiteInformation}
          siteTitle={data.contentfulSiteInformation.siteName}
          header={header}
        />
        <div>

        <Modal
        isOpen={true}
        style={{"height":"100%"}}
        >
        <div
        style={{"backgroundColor":"#F5F5DC", 
        "display":"flex",
        "flexDirection":"column",
        "justifyContent":"center",
        "alignItems":"center",
        "padding":"16px",
        "height":"100%",
        "opacity":"90%",
      }}>
          <h2 style={{"opacity":"100%"}}>Website currently under construction</h2>
          <h3>Contact <a href="mailto:support@bushonglaw.com">Support@BushongLaw.com</a></h3>
        </div>
        </Modal>

          <main id="home">{children}</main>
          

        </div>
        <Footer siteName={data.contentfulSiteInformation.siteName} />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
