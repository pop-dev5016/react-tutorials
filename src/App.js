import logo from './logo.svg';
import './App.css';

function App() {
  const name = "pavitharan";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HELLO {name}!
        </p>
   
        
      </header>
      
    </div>
  );
}

export default App;
