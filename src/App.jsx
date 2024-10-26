import React from "react";
import "./App.scss"
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return(
      <div>
        <Header />
{/* 
        <Routes>
          <Route path="/point1" element="Heh1" />
          <Route path="/point2" element="Heh2" />
          <Route path="/point3" element="Heh3" />
        </Routes> */}
      </div>
    )
  }
}

export default App;
