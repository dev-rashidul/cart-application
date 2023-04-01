import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Router/router';

function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
