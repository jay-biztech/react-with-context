import Profile from '../src/components/Profile';
import './App.css';
import Context from './context';

function App() {
  return (
    <div>
      <Context.Provider value={{ name: 'Jay', age: 28 }}>
        <Profile />
      </Context.Provider>
    </div>
  );
}

export default App;
