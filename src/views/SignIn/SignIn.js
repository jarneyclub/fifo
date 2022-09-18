import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import img from "../../assets/illustration/Illustration_Home_SignOn.png";
import GoogleIcon from "../../assets/icons/Google.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase"
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuth] = useState(false);

  const signInWithGoogle = async () => {
      setAuth(true);
      signInWithPopup(auth, new GoogleAuthProvider())
          .then((response) => {
              const uid = response.user.uid;
              const name = response.user.displayName;
              const email = response.user.email;
              const profilePic = response.user.photoURL;
              localStorage.setItem("User_Name", name);
              localStorage.setItem("User_Email", email);
              localStorage.setItem("User_photo", profilePic);
              navigate('/'); // going back to homepage
          })
          .catch((error) => {
              console.log(error);
              setAuth(false);
          });
  };

  return (
    <div className={styles.container}>
      <div className={styles.context}>
        <img
          className={styles.illustration}
          alt={"SignIn Illustration"}
          src={img}
        />
        <div className={styles.Header1}>
          Welcome to <span className={styles.blue}>FIFO</span>
        </div>
        <div className={styles.BodyBold}>Get your questions answered</div>
<<<<<<< HEAD:src/views/SignIn/SignIn.js
        {/* TODO merge the button and href into functional links */}
        <button className="signin-with-google-btn"
        onClick={() => signInWithGoogle()} disabled={authing}>Continue with Google</button>
        <a className={styles.btn} href="/user/enrollment">
=======
        <button className={styles.btn} onClick={() => signInWithGoogle()} disabled={authing}>
>>>>>>> 64055ceb82f55ccf7081ef2cf58312d555b62d25:src/views/SignIn/SignIn.tsx
          <img
            className={styles.icon}
            alt={"Google Icon"}
            src={GoogleIcon}
<<<<<<< HEAD:src/views/SignIn/SignIn.js
          ></img>
        </a>
=======
          /> Continue with your university credential!
        </button>
        
>>>>>>> 64055ceb82f55ccf7081ef2cf58312d555b62d25:src/views/SignIn/SignIn.tsx
      </div>
    </div>
  );
}
export default LoginPage;
