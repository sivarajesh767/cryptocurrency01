// Write your JS code here
import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  cryptocurrencyHeader = () => {
    ;<div className="header-co">
      <p className="head-1">Coin Type</p>
      <div className="values-co">
        <p className="usd">USD</p>
        <p className="EURO">EURO</p>
      </div>
    </div>
  }
  renderCryptocurrencyView = () => {
    const {cryptocurrenceDetail} = this.props
    return (
      <div>
        {this.cryptocurrencyHeader()}
        <ul className="unorder-List">
          {cryptocurrenceDetail.map(eachItem => (
            <CryptocurrencyItem
              key={eachItem.id}
              crytocurrencyDetailed={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h1 className="header-1">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="img-1"
        />
        {this.renderCryptocurrencyView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
