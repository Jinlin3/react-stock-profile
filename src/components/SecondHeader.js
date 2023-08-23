import Benzinga from './images/benzinga.svg';
import DoubleForwardArrow from './images/double-forward-arrow.svg';
import StocksImg from './images/StocksImg';
import WrenchImg from './images/WrenchImg';

const SecondHeader = () => {
  return (
    <div className="second-header-container">
      <div className="inner-container">
        <div className="left-side">
          <img className="benzinga-img" src={ Benzinga } alt="" />
          <div className="our-services">Our Services</div>
          <div className="news">News</div>
          <div className="markets">Markets</div>
          <div className="ratings">Ratings</div>
          <div className="ideas">Ideas</div>
          <div className="yield">Yield</div>
          <div className="money">Money</div>
          <div className="alts">Alts</div>
          <div className="crypto">Crypto</div>
          <div className="cannabis">Cannabis</div>
          <div className="jobs">Jobs</div>
        </div>
        <div className="right-side">
          <button className="research-button">
            <div>RESEARCH</div>
            <img src={ DoubleForwardArrow } alt="" className="double-forward-arrow-img" />
          </button>
          <div className="my-stocks">
            <StocksImg />
            <div>My Stocks</div>
          </div>
          <div className="tools">
            <WrenchImg />
            <div>Tools</div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default SecondHeader;