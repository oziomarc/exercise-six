import { useEffect, useState } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {initializeApp} from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.css';
import CreateUser from './pages/CreateUser';
import LoginPage from './pages/Login';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';

const firebaseConfig = {
  apiKey: "AIzaSyAKxHhuh3Y4BSMg-AoA3HpF5GtdeQf9Qqk",
  authDomain: "exercise-6-8daad.firebaseapp.com",
  projectId: "exercise-6-8daad",
  storageBucket: "exercise-6-8daad.appspot.com",
  messagingSenderId: "720595367360",
  appId: "1:720595367360:web:46f3a9f385585feb22c425"
};


function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    initializeApp(firebaseConfig);
    setAppInitialized(true)
  },[]) // runs once after the first render

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInfo(user)
          setIsLoggedIn(true)
        } else {
          setUserInfo({})
          setIsLoggedIn(false)
        }
        setIsLoading(false)
      });
    }
  }, [appInitialized]);

  console.log({userInfo})

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserProfile 
        isLoading={isLoading}
        userInfo={userInfo}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInfo={setUserInfo}
      />
    },
    {
      path: "/login",
      element: <LoginPage 
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      setUserInfo={setUserInfo} />
    },
    {
      path: "/create",
      element: 
        <CreateUser 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInfo={setUserInfo}
        />
      ,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
