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
              to="/login"
              className='navButton'>
              Login
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
            <input
              type="text"
              placeholder="search"
              className="search"
            />
          </nav>
        </div>
      
        <Outlet />
      </div>
  );
}

export default App;
