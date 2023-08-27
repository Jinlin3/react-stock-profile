const StockGraph = ({ company }) => {
  let companyInfo = company[0];
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>{ companyInfo.name } Stock ({companyInfo.abbreviation}), Quotes and News Summary</h2>
        <h3><a href="https://public.com/stocks/aapl" className="public-link">{ companyInfo.name } Stock ({companyInfo.abbreviation})</a> stock price, news, charts, stock research, profile.</h3>
      </div>
    </div>
  );
}
 
export default StockGraph;