import logo from './logo.svg';
import './App.css';
import ExampleComponent from './components/ExampleComponent/ExampleComponent';
import ExampleComponent2 from './components/ExampleComponent2/ExampleComponent2';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ExampleComponent></ExampleComponent>
        <ExampleComponent2></ExampleComponent2>
      </header>
    </div>
  );
}

export default App;
