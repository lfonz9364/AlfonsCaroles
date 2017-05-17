import React from 'react'

export default class ContactMe extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="contact" >
        <h2>Please select your preferred contact method</h2>
					<a href="mailto:cllin7787@gmail.com?subject=OnlinePortfolio"><img src="./images/mail.png" /></a>
          <a href="https://www.linkedin.com/in/alfonscaroles/" target="_blank"><img src="./images/linkedin.png" /></a>
      </div>
  }
}
