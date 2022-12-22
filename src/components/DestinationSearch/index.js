import {Component} from 'react'
import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    displayList: '',
  }

  onChangeInput = event => {
    const {destinationsList} = this.props
    const inputValue = event.target.value.toLowerCase()
    console.log(destinationsList)
    const filteredList = destinationsList.filter(displayItem => {
      const name = displayItem.name.toLowerCase()
      return name.includes(inputValue)
    })

    this.setState({displayList: filteredList})
  }

  render() {
    const {destinationsList} = this.props
    let requiredList = destinationsList
    const {displayList} = this.state
    if (displayList !== '') {
      requiredList = displayList
    }
    return (
      <div className="app-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-bar">
          <input
            id="searchBar"
            onChange={this.onChangeInput}
            className="input"
            type="search"
          />
          <button htmlFor="searchBar" type="button" className="search-button">
            <img
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
            />
          </button>
        </div>
        <ul className="destination-items-container">
          {requiredList.map(destinationItem => (
            <DestinationItem
              key={destinationItem.id}
              destinationItem={destinationItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
