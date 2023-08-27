import './css-files/Header.css';
import './css-files/StockDetails.css';
import './css-files/index.css';
import './css-files/StockPrices.css';
import './css-files/EndContainer.css';
import EndContainer from './components/EndContainer';
import Main from './Main'

function App() {
  return (
    <div className="App">
      <Main />
      <EndContainer />
    </div>
  );
}

export default App;
