// Write your code here
import {Component} from 'react'

import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderNoActiveEvent = () => (
    <div className="regestration-container">
      <div>
        <p className="click-to-view-tex">
          Click on an event, to view its registration details
        </p>
      </div>
    </div>
  )

  renderYetToRegister = () => (
    <div className="regestration-container">
      <div className="yet-to-regester-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="yet-to-reg-image"
        />
        <p className="yet-to-regester-text">
          A live performance brings so much to your relationship with
          dance.Seeing dance live can often make you fall totally in love with
          this beautiful art form
        </p>
        <button type="button" className="regester-btn">
          Register Here
        </button>
      </div>
    </div>
  )

  renderRegistered = () => (
    <div className="regestration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="regestered"
      />
      <h1 className="regestered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  renderRegestrationClosed = () => (
    <div className="regestration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="reg-closed-image"
      />
      <h1 className="reg-closed-heading">Registrations Are Closed Now!</h1>
      <p className="regestered-closed-text">
        Stay tuned. We will reopen the Registrations soon!!
      </p>
    </div>
  )

  render() {
    const {status} = this.props

    switch (status) {
      case 'NO_ACTIVE_EVENT':
        return this.renderNoActiveEvent()
      case 'YET_TO_REGISTER':
        return this.renderYetToRegister()
      case 'REGISTERED':
        return this.renderRegistered()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegestrationClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
