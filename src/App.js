import './css-files/Header.css';
import './css-files/StockDetails.css';
import './css-files/index.css';
import './css-files/StockPrices.css';
import './css-files/EndContainer.css';
import './css-files/StockGraph.css';

import Header from './components/Header';
import Main from './Main';
import EndContainer from './components/EndContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <EndContainer />
    </div>
  );
}

export default App;
