import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import UserContext, { UserDispatchContext } from './context';

function App() {
  const [userDetails, setUserDetails] = useState({
    name: 'Jay',
    age: 28,
  });

  return (
    <div>
      <UserContext.Provider value={userDetails}>
        <UserDispatchContext.Provider value={setUserDetails}>
          <Dashboard />
        </UserDispatchContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
