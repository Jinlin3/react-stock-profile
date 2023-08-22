import FirstHeader from './FirstHeader';
import SecondHeader from './SecondHeader';
import ThirdHeader from './ThirdHeader';

const Header = () => {
  return (
    <div className="header">
      <FirstHeader />
      <SecondHeader />
      <ThirdHeader />
    </div>
  );
}
 
export default Header;

// Header is divided into 3 separate headers