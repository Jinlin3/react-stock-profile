import Header from './components/Header';
import StockDetails from './components/StockDetail';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="body-inner-container">
        <StockDetails />
      </div>
    </div>
  );
}
 
export default Main;

/* put everything below the header within the inner-container to keep it within the boundaries */