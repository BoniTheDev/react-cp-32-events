// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItem, clickOnEachEvent} = props
  const {id, imageUrl, location, name, registrationStatus} = eventItem

  const clickOnEventItem = () => {
    clickOnEachEvent(registrationStatus)
  }

  return (
    <li className="event-item" key={id}>
      <button type="button" onClick={clickOnEventItem}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>

      <div className="event-details-card">
        <p className="event-heading">{name}</p>
        <p className="event-location">{location}</p>
      </div>
    </li>
  )
}

export default EventItem
