import IncreaseArrowTall from './images/IncreaseArrowTall';
import DecreaseArrowTall from './images/DecreaseArrowTall';

const atCloseString = 'At close: ';
const afterHoursString = 'After Hours: ';

const StockPrices = ({ price, tableInfo }) => {
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
        
      </div>
    </div>
  );
}
 
export default StockPrices;