import { useContext } from 'react';
import Context from '../context';

export default function Profile() {
  const { name, age } = useContext(Context);

  return (
    <div>
      <h1>My name is {name}.</h1>
      <h2>I am {age} years old.</h2>
    </div>
  );
}
