import {Component} from 'react'
import './index.css'
import History from '../Histrory'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class SearchHistory extends Component {
  state = {
    searchInput: '',
    list: initialHistoryList,
  }

  onChangeInput = event => {
    console.log(event.target.log)
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    const {list} = this.state
    const filter = list.filter(each => each.id !== id)
    this.setState({list: filter})
  }

  render() {
    const {searchInput, list} = this.state
    const flist = list.filter(each =>
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
        <div className="cont">
          {flist.length < 1 ? (
            <div>
              <p>There is no History</p>
            </div>
          ) : (
            <ul>
              {flist.map(each => (
                <History
                  details={each}
                  key={each.id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default SearchHistory
