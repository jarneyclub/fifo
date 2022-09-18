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
              console.log(response.user.uid);
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
        <button className={styles.btn} onClick={() => signInWithGoogle()} disabled={authing}>
          <img
            className={styles.icon}
            alt={"Google Icon"}
            src={GoogleIcon}
          /> Continue with your university credential!
        </button>
        
      </div>
    </div>
  );
}
export default LoginPage;
