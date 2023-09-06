const StockGraph = ({ companyName: company }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>{ company.name } Stock ({company.abbreviation}), Quotes and News Summary</h2>
        <h3><a href="https://public.com/stocks/aapl" className="public-link">{ company.name } Stock ({company.abbreviation})</a> stock price, news, charts, stock research, profile.</h3>
      </div>
    </div>
  );
}
 
export default StockGraph;