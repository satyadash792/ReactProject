import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Filter from './component/filter';
import GridData from './component/grid';

function App() {
  return (
    <div>
      <Navbar/>
      <Filter/>
      <GridData/>
    </div>
  );
}

export default App;
