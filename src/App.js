import logo from './logo.svg';
import './App.css';

function App() {
  let name1 = "pavitharan"
  let name2 = "vigneshwaran"
  let name3 = "navanandhini"
  const altername = function(){
    const name = [name1,name2,name3]
    const int  = Math.floor(Math.random()*3)
    return name[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello {altername()}!
        </p>
   
        
      </header>
      
    </div>
  );
}

export default App;
