import IncreaseArrowTall from './images/IncreaseArrowTall';
import DecreaseArrowTall from './images/DecreaseArrowTall';

const atCloseString = 'At close: ';
const afterHoursString = 'After Hours: ';

const StockPrices = ({ stockPrices: data, date }) => {
  const atCloseChange = (data.open - data.close).toFixed(3);
  const atClosePercentChange = ((atCloseChange / data.open) * 100).toFixed(2);

  return (
    <div className="stock-prices-container">
      <div className="at-close-after-hours-container">

        <div className="prices">
          <div className="price" style={{ fontSize: '30px' }}>${ data.close }</div>
          <div className="change-container">
            <div className="change" style={{
              color: atCloseChange >= 0 ? 'rgb(0, 197, 0)' : 'rgb(240, 82, 82)',
              fontSize: '20px' }}>
              <div className="arrow-container">
                {atCloseChange >= 0 ? (
                  <IncreaseArrowTall />
                ) : (
                  <DecreaseArrowTall />
                )}
              </div>
              <div className="price-change">{ atCloseChange }</div>
              <div className="price-percent-change">[{ atClosePercentChange }%]</div>
            </div>
          </div>
          <div className="date">
            <div className="string">{ `At Close: ${date}` }</div>
          </div>
        </div>

      </div>
      
      <div className="table">
        <div className="cell-1">
          <div>Open</div>
          <div className="numbers">{ data.open.toFixed(3) }</div>
        </div>
        <div className="cell-2">
          <div>Trading Volume</div>
          <div className="numbers">{ (data.volume / 1000000).toFixed(3) }M</div>
        </div>
        <div className="cell-3">
          <div>Day Range</div>
          <div className="numbers"> Unknown </div>
        </div>
        <div className="cell-4">
          <div>Close</div>
          <div className="numbers">{ data.close.toFixed(3) }</div>
        </div>
        <div className="cell-5">
          <div>Mkt Cap</div>
          <div className="numbers"> Unknown </div>
        </div>
        <div className="cell-6">
          <div>52 Wk Range</div>
          <div className="numbers"> Unknown </div>
        </div>
      </div>
    </div>
  );
}
 
export default StockPrices;