import './App.css';
import { Link, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ul>
            <Link to="/">Home</Link>
            <li>Log in</li>
            <li>Search</li>
          </ul>
            <Route path='/'></Route>
        </div>
      </header>
    </div>
  );
}

export default App;
