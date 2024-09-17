// Write your code here
import {Component} from 'react'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'
import Loader from 'react-loader-spinner'
const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrenceDetail: [], isLoading: true}
  componentDidMount() {
    this.getCryptocurrency()
  }
  getCryptocurrency = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    this.setState({
      cryptocurrenceDetail: data.map(eachDetail => ({
        id: eachDetail.id,
        currencyName: eachDetail.currency_name,
        usdValue: eachDetail.usd_value,
        euroValue: eachDetail.euro_value,
        currencyLogo: eachDetail.currency_logo,
      })),
      isLoading: false,
    })
  }
  cryptocurrencyView = () => {
    const {cryptocurrenceDetail} = this.state
    return <CryptocurrenciesList cryptocurrenceDetail={cryptocurrenceDetail} />
  }
  cryptocurrencyLoader = () => {
    ;<div>
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  }

  render() {
    const {isLoading} = this.state
    return (
      <div data-testid='loader'>
        {isLoading ? this.cryptocurrencyLoader() : this.cryptocurrencyView()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
