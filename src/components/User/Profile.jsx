import { useContext, useEffect } from 'react';
import UserContext, { UserDispatchContext } from '../../context';

export default function Profile() {
  console.log('Profile');

  const { name, age } = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  useEffect(() => {
    setTimeout(() => {
      setUserDetails({ name: 'Jay Parmar', age: 28 });
    }, 3000);
  }, []);

  return (
    <div>
      <p>Dashboard - Main - User - Page - Profile</p>
      <h4>My name is {name}.</h4>
      <h5>I am {age} years old.</h5>
    </div>
  );
}
