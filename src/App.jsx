import React, { Component } from "react";
import Homepage from "./components/Homepage/homepage";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='scroll'>
        <Homepage className='snap'/>
        <About className='snap'/>
        <Work className='snap'/>
        <Contact className='snap'/>
      </div>
    );
  }
}

export default App;
