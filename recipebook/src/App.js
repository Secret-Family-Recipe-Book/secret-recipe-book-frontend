import './App.css';
import { Link, Outlet} from "react-router-dom"



function App() {
  return (
    <div className="App">
      
        <h1 className='header'>Family Recipe</h1>
      <div>
        <nav className='navBar'>
          <Link to="/contact"
          className='navButton'>Contact</Link> {' '}
              <Link to='/about' className='navButton'>About</Link>
      </nav>
        </div>
      
        <Outlet />
      </div>
  );
}

export default App;
