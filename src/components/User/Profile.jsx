import { useContext } from 'react';
import Context from '../../context';

export default function Profile() {
  const { name, age } = useContext(Context);

  return (
    <div>
      <p>Dashboard - Main - User - Page - Profile</p>
      <h4>My name is {name}.</h4>
      <h5>I am {age} years old.</h5>
    </div>
  );
}
