import IncreaseArrowTall from './images/IncreaseArrowTall';
import DecreaseArrowTall from './images/DecreaseArrowTall';

const atCloseString = 'At close: ';
const afterHoursString = 'After Hours: ';

const StockPrices = ({ price, tableInfo }) => {
  const table = tableInfo[0];
  return (
    <div className="stock-prices-container">
      <div className="at-close-after-hours-container">
        {price.map((price) => (
          <div className="prices" key={ price.index }>
            <div className="price">${ price.price }</div>
            <div className="change-container">
              <div className="change">
                <div className="arrow-container">
                  {price.change >= 0 ? (
                    <IncreaseArrowTall />
                  ) : (
                    <DecreaseArrowTall />
                  )}
                </div>
              { price.change }
              [{ price.percentChange }%]
            </div>
            <div className="date">
              { price.index === 'atClose' ? (
                <div className="string">{ atCloseString }</div>
              ) : (
                <div className="string">{ afterHoursString }</div>
              )}
               <div>{ price.date }</div>
            </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="table">
        <div className="cell-1">
          <div>Open</div>
          <div className="numbers">{ table.open.toFixed(3) }</div>
        </div>
        <div className="cell-2">
          <div>Vol / Avg.</div>
          <div className="numbers">{ table.vol.toFixed(3) }M / { table.avg.toFixed(3) }M</div>
        </div>
        <div className="cell-3">
          <div>Day Range</div>
          <div className="numbers">{ table.dayRangeLow.toFixed(3) } - { table.dayRangeHigh.toFixed(3) }</div>
        </div>
        <div className="cell-4">
          <div>Close</div>
          <div className="numbers">{ table.close.toFixed(3) }</div>
        </div>
        <div className="cell-5">
          <div>Mkt Cap</div>
          <div className="numbers">{ table.mktCap.toFixed(3) }T</div>
        </div>
        <div className="cell-6">
          <div>52 Wk Range</div>
          <div className="numbers">{ table.wkRangeLow.toFixed(3) } - { table.wkRangeHigh.toFixed(3) }</div>
        </div>
      </div>
    </div>
  );
}
 
export default StockPrices;