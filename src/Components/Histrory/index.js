import {Component} from 'react'
import './index.css'

class History extends Component {
  render() {
    const {details, onDelete} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = details

    const ondel = () => {
      onDelete(id)
    }
    return (
      <li className="item-cont">
        <p>{timeAccessed}</p>
        <div className="inner-cont">
          <img src={logoUrl} className="inner-img" alt="domain logo" />
          <p>
            {title} {domainUrl}
          </p>
        </div>
        <button type="button" onClick={ondel} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </li>
    )
  }
}

export default History
