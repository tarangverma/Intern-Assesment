import './App.css';
import Context from './Components/Context/Context';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Context />
      <Main />
      <Info />
    </div>
  );
}

export default App;
