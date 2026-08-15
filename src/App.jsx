import { Route, Routes } from 'react-router';
import { HomeScreen } from './pages/HomeScreen';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomeScreen />}
        />
      </Routes>
    </>
  )
}

export default App;
