import React from 'react'

export default class GeneralAssembly extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="components">
        <h1>General Assembly</h1>
        <h1>February 2017 - May 2017</h1>
        <h2>Web Development Immersive</h2>
        <p>Projects:</p>
        <ul>
          <li><a href="https://lfonz9364.github.io/projects/">Star Trek Toe</a></li>
          <li><a href="https://desolate-tundra-35833.herokuapp.com/">Busy Bee</a></li>
          <li><a href="https://calm-beach-35487.herokuapp.com/">Melbourne Property App</a></li>
          <li><a href="https://mysterious-bastion-51155.herokuapp.com/">WDI Conference Carpool</a></li>
        </ul>
      </div>
  }
}
