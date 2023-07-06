import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './components/header/header'
import {Portfolio} from './components/portfolio/portfolio'

function App() { // component principal
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Portfolio></Portfolio>
    </div>
  );
}



export default App;
