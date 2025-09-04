import './App.css';
import NavigationMenu from './NavigationMenu';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='flex h-full'>
      <Router>
        <NavigationMenu />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
