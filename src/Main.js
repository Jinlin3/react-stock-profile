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
  const stockPricesURL = `https://api.polygon.io/v1/open-close/AAPL/${date}?adjusted=true&apiKey=VI0`;
  const graphDataURL = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/5/minute/2023-09-01/2023-09-01?adjusted=true&sort=asc&limit=5000&apiKey=VI0`;
  const { data: stockPrices, error: stockPricesError } = useFetch(stockPricesURL);
  const { data: graphData, error: graphDataError } = useFetch(graphDataURL);
  return (
    <div className="main">
      <div className="body-inner-container">
        <StockDetails companyName={ companyName } />
        { stockPricesError && <div className="error">{ stockPricesError }</div> }
        { stockPrices && <StockPrices stockPrices={ stockPrices } date={ date }/> }
        <Navbar />
        { graphDataError && <div className="error">{ graphDataError }</div> }
        { graphData && <StockGraph companyName={ companyName } graphData={ graphData.results } /> }
      </div>
    </div>
  );
}
 
export default Main;

/* put everything below the header within the inner-container to keep it within the boundaries */