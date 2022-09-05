import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuth] = useState(false);

    const signInWithGoogle = async () => {
        setAuth(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate('/'); // going back to homepage
            })
            .catch((error) => {
                console.log(error);
                setAuth(false);
            });
    };

    return (
        <div>
            <p>Login Page</p>
            <button onClick={() => signInWithGoogle()} disabled={authing}>
                Sign in with Google
            </button>
        </div>
    );
};

export default LoginPage;