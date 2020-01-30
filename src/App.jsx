import React, { Component } from "react";
import Homepage from "./components/Homepage/homepage";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Homepage/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    );
  }
}

export default App;
