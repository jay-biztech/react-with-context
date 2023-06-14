import { useState } from 'react';
import UserContext, { UserDispatchContext } from '../../context';
import Page from './Page';
import TopNav from './TopNav';

export default function User() {
  console.log('User');

  const [userDetails, setUserDetails] = useState({
    name: 'Jay',
    age: 28,
  });

  return (
    <div>
      <TopNav />
      <p>Dashboard - Main - User</p>

      <UserContext.Provider value={userDetails}>
        <UserDispatchContext.Provider value={setUserDetails}>
          <Page />
        </UserDispatchContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
