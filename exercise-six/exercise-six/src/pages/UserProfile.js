import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Header from "../components/Header";

function UserProfile({isLoading, isLoggedIn, userInfo, setIsLoggedIn, setUserInfo}) {
    const navigate = useNavigate()

    useEffect(() => {
        if(!isLoggedIn && !isLoading) navigate('/login');
    }, [isLoggedIn, isLoading])

    return (
        <>
            <Header
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}
                setUserInfo={setUserInfo}
            />
            <div className="pageWrapper">
                <h1>User Profile</h1>
                <p><strong>Display Name: </strong>{userInfo.displayName}</p>
                <p><strong>Email: </strong>{userInfo.email}</p>
                <p><strong>User ID: </strong>{userInfo.uid}</p>
            </div>
        </>
    )
}

export default UserProfile