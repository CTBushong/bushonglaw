import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";



import DisclaimerText from "./DisclaimerText";



class DisclaimerPage extends React.Component {
    render() {
 
    
    return (
        <div>
        <Header />
        <div>
          <div>
            <div style={{"margin":"6em"}}>
              <DisclaimerText />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
    }
}

export default DisclaimerPage;