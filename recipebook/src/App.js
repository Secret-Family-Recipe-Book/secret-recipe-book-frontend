import './App.css';
import { Link, Outlet} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <div className="header">
        <Link to="/"className='homeLink'>Family Recipe</Link>
      </div>
      <div>
        <nav className='navBar'>
          <Link
            to="/contact"
            className='navButton'>
            Contact
          </Link> 
          <Link
            to='/about'
            className='navButton'>
            About
          </Link>
          <Link
            to='/add'
            className='navButton'>
            Add Recipe
          </Link>
        </nav>
        </div>
      
        <Outlet />
      </div>
  );
}

export default App;
