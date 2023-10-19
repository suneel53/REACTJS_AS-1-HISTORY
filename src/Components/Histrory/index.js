import {Component} from 'react'
import './index.css'

class History extends Component {
  render() {
    const {details} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = details
    return (
      <li className="item-cont">
        <p>{timeAccessed}</p>
        <div className="inner-cont">
          <img src={logoUrl} className="inner-img" alt="domain logo" />
          <p>
            {title} {domainUrl}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </li>
    )
  }
}

export default History
