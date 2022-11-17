import React, { useCallback, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import CreateUserForm from "../components/CreateUserForm";
import Header from "../components/Header";

function CreateUser({setIsLoggedIn, setUserInfo}) {
    const [error, setErrors] = useState();
    // create a user
    const signUpUser = useCallback (
        (e) => {
            e.preventDefault();

            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;

            console.log({email, password})

            const auth = getAuth();

            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                setIsLoggedIn(true)
                setUserInfo({
                    email: user.email,
                    displayName: user.displayNAme,
                    uid: user.uid,
                    accessToken: user.accessToken,
                })
                setErrors()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.warn({ error, errorCode, errorMessage})
                setErrors(errorMessage);
            });
        },
        [setErrors, setIsLoggedIn, setUserInfo]
    );

    return (
        <>
            <div className="pageWrapper">
                <h1>Create User</h1>
                <CreateUserForm signUpUser={signUpUser}/>
                <p>{error}</p>
            </div>
        </>
    )
}

export default CreateUser