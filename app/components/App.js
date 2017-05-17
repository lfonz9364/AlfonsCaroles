import React from 'react'
import MenuBar from './public/MenuBar'
import Profile from './pages/Profile'
import Skill from './pages/Skill'
import ContactMe from './pages/ContactMe'
import Timeline from './pages/Timeline'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.getSelection = this.getSelection.bind(this)
    this.state = {
      page: 'Profile'
    }
  }

  getSelection(pageSelected){
    this.setState({ page: pageSelected })
  }


  render(){
    if (this.state.page === 'Profile') {
      return <div>
        <Profile />
        <MenuBar getSelection={this.getSelection} page={this.state.page} />
      </div>
    } else if(this.state.page === 'Skills') {
      return <div>
        <MenuBar getSelection={this.getSelection} page={this.state.page} />
        <Skill />
      </div>
    } else if(this.state.page === 'Timeline') {
      return <div>
        <MenuBar getSelection={this.getSelection} page={this.state.page} />
        <Timeline />
      </div>
    } else if(this.state.page === 'Contact Me') {
      return <div>
        <MenuBar getSelection={this.getSelection} page={this.state.page} />
        <ContactMe />
      </div>
    }
  }
}
