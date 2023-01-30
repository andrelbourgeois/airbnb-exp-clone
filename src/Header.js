import "./App.css";

function Header() {
  return (
    <div className="App-header">
      <div className="title">
        <img className="App-logo" src={require("./airbnb-logo.png")} alt="airbnb logo" href="" />
        <h2>airbnb</h2>
        <h2 className="clone">clone</h2>
      </div>
      <div className="subtitle">
        <h3>andré Bourgeois</h3>
      </div>
    </div>
  );
}

export default Header;