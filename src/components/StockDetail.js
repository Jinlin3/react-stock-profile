import AppleLogo from './images/apple-logo.svg'

const StockDetails = ({ company }) => {
  return (
    <div className="company-actions-container">
      <div className="company-info">
        <div className="img-container">
          <img src={ AppleLogo } alt="NOT LOADING" />
        </div>
        <div className="container">
          <div className="name-and-abbreviation">
            <div className="full-name">{ company[0].name }</div>
            <div className="abbreviation">({ company[0].abbreviation })</div>
          </div>
          <button className="add-to-watchlist">Add to Watchlist +</button>
        </div>
      </div>
      <div className="company-actions">
        <button className="perks">Perks</button>
        <button className="buy">Buy</button>
        <button className="compare-brokers">Compare Brokers</button>
      </div>
    </div>
  );
}
 
export default StockDetails;