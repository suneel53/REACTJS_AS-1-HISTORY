import {Component} from 'react'
import './index.css'
import History from '../Histrory'

class SearchHistory extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    console.log(event.target.log)
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    const {list} = this.state
    const filter = list.filter(each => each.id !== id)
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const filtersearch = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-cont">
        <div className="head-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="head-logo-img"
            alt="app logo"
          />
          <div className="head-inner-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-logo"
              alt="search"
            />
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeInput}
              className="input"
              placeholder="Search history"
            />
          </div>
        </div>
        <ul className="cont">
          {filtersearch.map(each => (
            <History details={each} key={each.id} onDelete={this.onDelete} />
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchHistory
