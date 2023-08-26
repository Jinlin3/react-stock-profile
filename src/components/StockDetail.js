import CompanyActions from './CompanyActions';

const companyInfo = {
  name: 'Apple Inc',
  abbreviation: 'NASDAQ:APPL',

  atClosePrice: 178.61,
  atClosePriceChange: 2.23,
  atClosePercentChange: 1.26,
  lastCloseTime: 'Aug 25',

  afterHoursPrice: 178.3611,
  afterHoursPriceChange: -0.2489,
  afterHoursPercentChange: -0.14,
  afterHoursTime: '6:24PM EDT'
}

const StockDetails = () => {
  return (
    <div className="stock-details-container">
      <CompanyActions companyInfo={companyInfo} />
    </div>
  );
}
 
export default StockDetails;