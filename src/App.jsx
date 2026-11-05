import { Link, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';

import "./App.css";

function App() {

  return (
    <div>
      <nav>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
      <div>Footer</div>
    </div>
  );
}



export default App;