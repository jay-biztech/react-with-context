import Page from './Page';
import TopNav from './TopNav';

export default function User() {
  console.log('User');

  return (
    <div>
      <TopNav />
      <p>Dashboard - Main - User</p>
      <Page />
    </div>
  );
}
