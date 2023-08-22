import BenzingaPro from './images/benzinga-pro.png';
import DownArrow from './images/down-arrow.svg';

const FirstHeader = () => {
  return (
    <div className="first-header-container">
      <div className="inner-container">
        <div className="left-side">
          <div className="benzinga-pro-container">
            <img className="benzinga-pro-img" src={ BenzingaPro } alt="BENZINGA PRO" />
          </div>
          <div className="data-and-apis">DATA & APIS</div>
          <div className="events">EVENTS</div>
          <div className="marketfy">MARKETFY</div>
          <div className="premarket">PREMARKET</div>
          <div className="boost">BOOST</div>
          <div className="advertise">ADVERTISE</div>
        </div>
        <div className="right-side">
          <div className="contribute">Contribute</div>
          <div className="language">
            <p>EN</p>
            <img className="down-arrow-img" src={ DownArrow } alt="" />
          </div>
          <div className="sign-in">SIGN IN</div>
        </div>
      </div>
    </div>
  );
}
 
export default FirstHeader;