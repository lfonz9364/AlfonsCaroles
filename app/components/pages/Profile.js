import React from 'react'
import '../public/Global.css'

export default class Profile extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="profile">
        <img src="./images/profile.jpg" />
        <h2>"Web Development is about solving problems in many different ways"</h2>
        <p>
          I have experience in managing customers from diverse backgrounds. I have
          valuable skills in leadership, problem solving, time management and
          interpersonal from my previous work experience. Currently, I am looking for
          an opportunity to advance my career as a Web Developer and to learn more
          about the ICT industry.
        </p>
      </div>
  }
}
