import Header from './components/Header';
import StockDetails from './components/StockDetail';
import StockPrices from './components/StockPrices';

const company = [
  {
    name: 'Apple Inc',
    abbreviation: 'NASDAQ:APPL',
    group: 1,
    index: 'names'
  },
  {
    price: 178.61,
    change: 2.23,
    percentChange: 1.26,
    date: 'Aug 25',
    group: 2,
    index: 'atClose'
  },
  {
    price: 178.5899,
    change: -0.0201,
    percentChange: -0.01,
    date: '7:59PM EDT',
    group: 2,
    index: 'afterHours'
  },
  {
    open: 177.380,
    close: 178.610,
    vol: 51.450,
    avg: 57.184,
    mktCap: 2.792,
    dayRangeLow: 175.820,
    dayRangeHigh: 179.150,
    wkRangeLow: 124.170,
    wkRangeHigh: 198.230,
    group: 3,
    index: 'table'
  }
]

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="body-inner-container">
        <StockDetails company={ company } />
        <StockPrices price={ company.filter((company) => company.group === 2) } tableInfo={ company.filter((company) => company.group === 3) } />
      </div>
    </div>
  );
}
 
export default Main;

/* put everything below the header within the inner-container to keep it within the boundaries */