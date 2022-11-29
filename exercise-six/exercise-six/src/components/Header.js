import React from "react";
import { getAuth, signOut } from "firebase/auth"

function Header({ setIsLoggedIn, setUserInfo, isLoggedIn }) {

    function logOut() {
        const auth = getAuth()
        signOut(auth).then(() => {
            setUserInfo({});
            setIsLoggedIn(false);
        })
        .catch((error) => {
            console.warn(error)
        })
    }
    return (
        <header>
            <nav>
                {isLoggedIn && <a href="/"><p>Home</p></a>}
                {!isLoggedIn && <a href="/login"><p>Login</p></a>}
                {!isLoggedIn && <a href="/create"><p>Create User</p></a>}
                {isLoggedIn && <a href="/login"><p onClick={() => logOut()}>Log Out</p></a>}
            </nav>
        </header>
        
    )
}

export default Header;