import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export function DefaultLayout() {
  return (
    <div className="bg-background max-w-screen min-h-screen px-40 py-8">
      <Header />
      <Outlet />
    </div>
  );
}
