import React from "react";

const stocks = ["VIC", "HPG", "VNM", "VCB", "MWG", "SSI"];

const TradingViewWidget = ({ symbol }) => (
  <div style={{ marginBottom: 40 }}>
    <div>
      <b>{symbol}</b>
    </div>
    <iframe
      src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${symbol}&symbol=HOSE%3A${symbol}&interval=60&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=%5B%22MAExp@tv-basicstudies%22%2C%22Volume@tv-basicstudies%22%2C%22MAExp@tv-basicstudies%22%2C%22MAExp@tv-basicstudies%22%2C%22MAExp@tv-basicstudies%22%5D&studies_overrides=%7B%22MAExp@tv-basicstudies.inputLength%22%3A10%2C%22MAExp@tv-basicstudies_1.inputLength%22%3A20%2C%22MAExp@tv-basicstudies_2.inputLength%22%3A50%2C%22MAExp@tv-basicstudies_3.inputLength%22%3A200%7D&theme=light&style=1&locale=vi&enabled_features=%5B%5D&disabled_features=%5B%5D`}
      width="100%"
      height="400"
      frameBorder="0"
      allowtransparency="true"
      scrolling="no"
      title={symbol}
    ></iframe>
  </div>
);

function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h2>Biểu đồ kỹ thuật VNINDEX (MA10, MA20, MA50, MA200, Volume)</h2>
      {stocks.map((symbol) => (
        <TradingViewWidget symbol={symbol} key={symbol} />
      ))}
    </div>
  );
}

export default App;
