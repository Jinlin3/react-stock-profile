import SearchImg from './images/SearchImg';
import IncreaseArrow from './images/IncreaseArrow';
import DecreaseArrow from './images/DecreaseArrow';

const stockList = [
  {name: 'SPY', price: 436.95, change: 'down', percentage: '1.37%', id: 1},
  {name: 'QQQ', price: 361.22, change: 'down', percentage: '2.14%', id: 4},
  {name: 'SPIKE', price: 17.24, change: 'up', percentage: '6.55%', id: 7},
  {name: 'BTC/USD', price: 26122.15, change: 'down', percentage: '1.0675%', id: 10},
  {name: 'DIA', price: 341.03, change: 'down', percentage: '1.1%', id: 13},
  {name: 'GLD', price: 177.85, change: 'down', percentage: '0.02%', id: 16},
  {name: 'TLT', price: 94.91, change: 'down', percentage: '0.66%', id: 19}
];

const ThirdHeader = () => {
  return (
    <div className="third-header-container">
      <div className="inner-container">

        <div className="stock-grid">
          <div className="recent">Recent</div>
          {stockList.map((stock) => (
            <div className="company-name">{ stock.name }</div>
          ))}

          <div className="markets">Markets</div>

          {stockList.map((stock) => (
            <div className="stock-status">
            <div className="stock-price">{ stock.price }</div>
            <div style={{ color: stock.change === 'up' ? 'rgb(14, 159, 110)' : 'rgb(240, 82, 82)' }} className="stock-change">
              {stock.change === 'up' ? (
                <IncreaseArrow />
              ) : (
                <DecreaseArrow />
              )}
              <div className="stock-percentage">
              { stock.percentage }
              </div>
            </div>
          </div>
          ))}

        </div>
        <div className="search-bar-side">
          <button className="search-button">
            <SearchImg />
          </button>
          <input className="search-bar" type="text" placeholder="Search Tickers, Companies, Or News..." />
        </div>
      </div>
    </div>
  );
}
 
export default ThirdHeader;