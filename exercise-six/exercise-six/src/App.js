import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css';
import CreateUser from './pages/CreateUser';
import LoginPage from './pages/Login';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProfile />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/create",
    element: <CreateUser />
  }
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
