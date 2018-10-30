import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Head from "./Head.js";
import NextHead from "./NextHead.js";
import PreviousImage from "./PreviousImage.js";
import Legs from "./Legs.js";
import NextLegs from "./NextLegs.js";
import PreviousLegs from "./PreviousLegs.js";
import Body from "./Body.js";
import NextBody from "./NextBody.js";
import PreviousBody from "./PreviousBody.js";

// head images
import head1 from "./images/head1.jpg";
import head2 from "./images/head2.jpg";
import head3 from "./images/head3.jpg";

// Body Images
import body1 from "./images/body1.jpg";
import body2 from "./images/body2.jpg";
import body3 from "./images/body3.jpg";

// Legs Images
import legs1 from "./images/legs1.jpg";
import legs2 from "./images/legs2.jpg";
import legs3 from "./images/legs3.jpg";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

        // Head Data
        headPhotos: [head1, head2, head3],
        currentHeadIndex: 0,
        headTranslateValue: 0,

        // Body Data
        bodyPhotos: [body1, body2, body3],
        currentBodyIndex: 0,

        // Legs Data
        legsPhotos: [legs1, legs2, legs3],
        currentLegsIndex: 0
    }

  }

  nextHead = () => {
    if (this.state.currentHeadIndex === this.state.headPhotos.length - 1) {
      return this.setState({
        currentHeadIndex: 0,
        translateValue: 0
      })
    }

    this.setState((state) => ({
      currentHeadIndex: state.currentHeadIndex + 1,
      headTranslateValue: state.headTranslateValue + -(this.slideWidth())
    }));
  }

  previousHead = () => {
    if (this.state.currentHeadIndex === 0) {
      return this.setState({
        currentHeadIndex: 2,
        translateValue: 0
      })
    }

    this.setState((state) => ({
      currentHeadIndex: state.currentHeadIndex - 1,
      headTranslateValue: state.headTranslateValue + -(this.slideWidth())
    }));
  }

  nextLegs = () => {
    if (this.state.currentLegsIndex === this.state.legsPhotos.length - 1) {
      return this.setState({
        currentLegsIndex: 0,
        translateValue: 0
      })
    }

    this.setState((state) => ({
      currentLegsIndex: state.currentLegsIndex + 1,
      
    }));
  }

  previousLegs = () => {
    if (this.state.currentLegsIndex === 0) {
      return this.setState({
        currentLegsIndex: 2,
        translateValue: 0
      })
    }

    this.setState((state) => ({
      currentLegsIndex: state.currentLegsIndex - 1,
      
    }));
  }

  nextBody = () => {
    if (this.state.currentBodyIndex === this.state.bodyPhotos.length - 1) {
      return this.setState({
        currentBodyIndex: 0,
        translateValue: 0
      })
    }

    this.setState((state) => ({
      currentBodyIndex: state.currentBodyIndex + 1,
      
    }));
  }

  previousBody = () => {
    if (this.state.currentBodyIndex === 0) {
      return this.setState({
        currentBodyIndex: 2,
        translateValue: 0
      })
    }

    this.setState((state) => ({
      currentBodyIndex: state.currentBodyIndex - 1,
      
    }));
  }

  slideWidth = () => {
    return document.querySelector('.head').clientWidth
  }

  

  render() {
    return (
      <div className="App">
        <div className="headContainer">
          {/* Head Components */}
          <Head image={this.state.headPhotos[this.state.currentHeadIndex]}/>
          <PreviousImage previous={this.previousHead}/>
          <NextHead next={this.nextHead}/>
        </div>

        <div className="bodyContainer">
          {/* Body Compononents */}
          <Body image={this.state.bodyPhotos[this.state.currentBodyIndex]} />
          <NextBody next={this.nextBody} />
          <PreviousBody previous={this.previousBody} />
        
        </div>

        <div className="legsContainer">
          {/* Leg Components */}
          <Legs image={this.state.legsPhotos[this.state.currentLegsIndex]}/>
          <NextLegs next={this.nextLegs} />
          <PreviousLegs previous={this.previousLegs} />
        </div>

        
      </div>
    );
  }
}

export default App;
