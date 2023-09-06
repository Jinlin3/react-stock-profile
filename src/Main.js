import StockDetails from './components/StockDetails';
import StockPrices from './components/StockPrices';
import StockGraph from './components/StockGraph';
import Navbar from './components/Navbar';
import useFetch from './useFetch';

const companyName = {
  name: 'Apple Inc',
  abbreviation: 'NASDAQ:APPL',
};

const Main = () => {
  let date = '2023-09-01';
  const url = `https://api.polygon.io/v1/open-close/AAPL/${date}?adjusted=true&apiKey=VI0`;
  const stockPrices = useFetch(url);
  return (
    <div className="main">
      <div className="body-inner-container">
        <StockDetails companyName={ companyName } />
        { stockPrices && <StockPrices stockPrices={ stockPrices } date={ date }/> }
        <Navbar />
        <StockGraph companyName={ companyName } />
      </div>
    </div>
  );
}
 
export default Main;

/* put everything below the header within the inner-container to keep it within the boundaries */