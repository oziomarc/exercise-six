import './App.css';
import {createBrowserRouter, RoutuerProvider} from "react-router"
import CreateUser from './pages/CreateUser';
import Login from './pages/Login';
import Profile from './pages/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProfile />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/create",
    element: <CreateUser />
  }
])
;
function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
