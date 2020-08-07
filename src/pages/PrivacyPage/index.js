import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";



import PrivacyText from "./PrivacyText";



class PrivacyPage extends React.Component {
    render() {
 
    
    return (
        <div>
        <Header />
        <div>
          <div>
            <div style={{"margin":"6em"}}>
              <PrivacyText />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
    }
}

export default PrivacyPage;