import "./App.css";
import FooterWeb from "./Components/Footer/FooterWeb";
import Menu from "./Router/Menu/Menu";
import MenuHome from "./Router/Menu/MenuHome";
import route from "./Router/Route/Route";

function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Menu />
        </div>
        <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">{route}</div>
      </div>
      <FooterWeb />
    </div>
  );
}

export default App;
