import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import CreateUserForm from "../components/CreateUserForm";
import Header from "../components/Header";

function CreateUser({setIsLoggedIn, setUserInfo, isLoggedIn}) {
    const [errors, setErrors] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        if(isLoggedIn) navigate('/');
    }, [isLoggedIn, navigate])

    const signUpUser = useCallback (
        (e) => {
            e.preventDefault();

            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;

            const auth = getAuth();

            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                setIsLoggedIn(true)
                setUserInfo({
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid,
                    accessToken: user.accessToken,
                })
                setErrors()
            })
            .catch((errors) => {
                const errorCode = errors.code;
                const errorMessage = errors.message;
                console.warn({ errors, errorCode, errorMessage})
                setErrors(errorMessage);
            });
        },
        [setErrors, setIsLoggedIn, setUserInfo]
    );

    return (
        <>
            <Header 
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setUserInfo={setUserInfo}
            />
            <div className="pageWrapper">
                <h1>Create User</h1>
                <CreateUserForm signUpUser={signUpUser}/>
                <p>{errors}</p>
            </div>
        </>
    )
}

export default CreateUser