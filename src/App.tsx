import { Routes, Route } from 'react-router-dom';
import ToggleSwitch from './components/ThemeToggle';
import UserCard from './components/UserCard';

function App() {
  return (
      <div className="relative h-full bg-[#e6e6e6] dark:bg-gray-900 p-2">
        <div className="absolute top-2 left-1/2 -translate-x-1/2">
          <ToggleSwitch />
        </div>

        <Routes>
          <Route path="/" element={<UserCard />} />
          <Route path="/user/:id" element={<UserCard />} />
        </Routes>
      </div>
  );
}

export default App;
