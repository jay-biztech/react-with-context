import Main from './Main';
import Sidebar from './Sidebar';

export default function Dashboard() {
  console.log('Dashboard');

  return (
    <div>
      <h3>Set User Details from App to Profile page via Context API</h3>
      <p>App - Dashboard</p>
      <Sidebar />
      <Main />
    </div>
  );
}
