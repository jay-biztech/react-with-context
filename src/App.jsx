import './App.css';
import Dashboard from './components/Dashboard';
import Context from './context';

function App() {
  return (
    <div>
      <Context.Provider value={{ name: 'Jay', age: 28 }}>
        <Dashboard />
      </Context.Provider>
    </div>
  );
}

export default App;
