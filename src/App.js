import "./App.css";
// import NavBar from "./components/Navbar";
import Carousels from "./components/carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Info1 from "./components/Info1";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Carousels />
      <Info1/>
    </div>
  );
}

export default App;
