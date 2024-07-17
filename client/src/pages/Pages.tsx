import { Outlet } from 'react-router-dom';
import Nav from '../components/nav/Nav';

function Pages() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Nav />
      <main className="flex-1 sm:p-1 flex flex-col items-start">
        <Outlet />
      </main>
    </div>
  );
}

export default Pages;