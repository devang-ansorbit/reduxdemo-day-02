import logo from './logo.svg';
import './App.css';
import { User }  from './Components/user';
import { Pagination } from './Components/Pagination';

function App() {
  return (
    <div className="App">
     <User />
     <Pagination />
    </div>
  );
}

export default App;
