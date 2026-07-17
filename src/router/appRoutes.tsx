import { Routes, Route } from 'react-router-dom';
import App from '@/App';
import { PATHS } from './paths';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<App />} />
      <Route path={PATHS.GUEST} element={<App />} />
    </Routes>
  );
}