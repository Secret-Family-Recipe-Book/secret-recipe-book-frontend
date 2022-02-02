import './App.css';
import { Link, Outlet} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <h1>this is a title</h1>
        <nav>
              <Link to="/contact">Contact</Link>
              <Link to='/about'>About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
