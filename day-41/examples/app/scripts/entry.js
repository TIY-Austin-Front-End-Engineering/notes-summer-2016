import React from 'react';
import ReactDOM from 'react-dom'
// using object De-structuring i could import just the render function
// import {render} from 'react-dom';
import Transition from 'react-addons-css-transition-group';
import {Router} from 'react-router';


const images = [
  '/assets/sk8er-1.png',
  '/assets/sk8er-2.png',
  '/assets/sk8er-3.png',
  '/assets/sk8er-4.png',
]

const UnderlineEffect = React.createClass({
  render: function() {
    return (
      <div className="box">
        {this.props.children}
      </div>
    )
  }
})

const Slider = React.createClass({
  getInitialState: function() {
    return {showing: 0}
  },
  componentDidMount: function() {
    setInterval(() => {
      if (this.state.showing === this.props.images.length-1) {
        this.setState({showing: 0})
      } else {
        this.setState({showing: this.state.showing + 1})
      }
    }, 5000);
  },
  render: function() {
    let image = (<img key={this.state.showing} src={this.props.images[this.state.showing]} className="current"/>)
    return (
      <div className="slider">
        <Transition
          transitionName="slide-left"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={2000}>
          {image}
        </Transition>
      </div>
    )
  }
})

const MetaInfo = React.createClass({
  getInitialState: function() {
    return {showOverlay: false}
  },
  toggleMeta: function() {
    this.setState({showOverlay: !this.state.showOverlay})
  },
  render: function() {
    let overlay;
    if (this.state.showOverlay) {
      overlay = (
        <div className="overlay">
          <p>name: Some Cool Guy</p>
          <p>party hat: top hat</p>
        </div>
      );
    }
    return (
      <div className="meta-box" onClick={this.toggleMeta}>
        <img src="/assets/sk8er-1.png"/>
        <Transition
          transitionName="grow-from-center"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {overlay}
        </Transition>
      </div>
    )
  }
})

// ReactDOM.render((
//   <Slider images={images}/>
//   ), document.getElementById('container'));

ReactDOM.render((
  <MetaInfo/>
), document.getElementById('container'))

// if render is imported directly using de-structuring then this is how we use it:
// render((
//   <MetaInfo/>
// ), document.getElementById('container'))
