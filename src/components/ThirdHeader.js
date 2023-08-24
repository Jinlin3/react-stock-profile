import SearchImg from './images/SearchImg';

const ThirdHeader = () => {
  return (
    <div className="third-header-container">
      <div className="inner-container">

        <div className="stock-grid">
          <div className="recent">Recent</div>
          <div className="company-name">SPY</div>
          <div className="company-name">SPY</div>
          <div className="company-name">SPY</div>
          <div className="company-name">SPY</div>
          <div className="company-name">SPY</div>
          <div className="company-name">SPY</div>
          <div className="company-name">SPY</div>

          <div className="markets">Markets</div>
          <div className="stock-status">
            <div className="stock-price">100.00</div>
            <div className="percentage">1.00%</div>
          </div>
          <div className="stock-status">
            <div className="stock-price">100.00</div>
            <div className="percentage">1.00%</div>
          </div>
          <div className="stock-status">
            <div className="stock-price">100.00</div>
            <div className="percentage">1.00%</div>
          </div>
          <div className="stock-status">
            <div className="stock-price">100.00</div>
            <div className="percentage">1.00%</div>
          </div>
          <div className="stock-status">
            <div className="stock-price">100.00</div>
            <div className="percentage">1.00%</div>
          </div>
          <div className="stock-status">
            <div className="stock-price">100.00</div>
            <div className="percentage">1.00%</div>
          </div>
          <div className="stock-status">
            <div className="stock-price">100.00</div>
            <div className="percentage">1.00%</div>
          </div>

        </div>
        <div className="search-bar-side">
          <div className="search-button">
            <SearchImg />
          </div>
          <input type="text" placeholder="Search Tickers, Companies, Or News" />
        </div>
      </div>
    </div>
  );
}
 
export default ThirdHeader;