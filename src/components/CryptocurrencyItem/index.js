// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {crytocurrencyDetailed} = props
  const {currencyName, usdValue, euroValue, currencyLogo} =
    crytocurrencyDetailed
  return (
    <li>
      <div className="container-1">
        <img src={currencyLogo} alt={currencyName} className="img" />
        <p className="para-1">{currencyName}</p>
        <div className="co-values">
          <p className="para-values">{usdValue}</p>
          <p className="para-values">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
