import logo from './logo.svg';
import './App.css';
import { MyComponent, MyContextProvider } from './demo';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <MyComponent />
      </MyContextProvider>
    </div>
  );
}

export default App;
