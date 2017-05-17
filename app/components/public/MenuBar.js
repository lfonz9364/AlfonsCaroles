import React from 'react'

export default class MenuBar extends React.Component {

  constructor(props) {
    super(props)
    this.handleClickMenu = this.handleClickMenu.bind(this)
  }

  handleClickMenu(event) {
    this.props.getSelection(event.target.textContent);
  }

  render(){
      if(this.props.page === "Profile"){
        return <div className="menu">
          <ul>
            <li className="selection" onClick={this.handleClickMenu}>Skills</li>
            <li className="selection" onClick={this.handleClickMenu}>Timeline</li>
            <li className="selection" onClick={this.handleClickMenu}>Contact Me</li>
          </ul>
        </div>
      } else if (this.props.page === "Skills") {
        return <div className="menu">
          <ul>
            <li className="selection" onClick={this.handleClickMenu}>Profile</li>
            <li className="selection" onClick={this.handleClickMenu}>Timeline</li>
            <li className="selection" onClick={this.handleClickMenu}>Contact Me</li>
          </ul>
        </div>
      } else if (this.props.page === "Timeline") {
        return <div className="menu">
          <ul>
            <li className="selection" onClick={this.handleClickMenu}>Profile</li>
            <li className="selection" onClick={this.handleClickMenu}>Skills</li>
            <li className="selection" onClick={this.handleClickMenu}>Contact Me</li>
          </ul>
        </div>
      } else {
        return <div className="menu">
          <ul>
            <li className="selection" onClick={this.handleClickMenu}>Profile</li>
            <li className="selection" onClick={this.handleClickMenu}>Skills</li>
            <li className="selection" onClick={this.handleClickMenu}>Timeline</li>
          </ul>
        </div>
      }

  }
}
