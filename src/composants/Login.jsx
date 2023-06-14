import React , {useContext} from 'react'

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../config/firebase'; 
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from "react-router-dom"


function Login() {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const googleHandler = async () => {
        provider.setCustomParameters({ prompt: 'select_account' });
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user; 
                login(user); 
                navigate("/");

                // redux action? --> dispatch({ type: SET_USER, user });
                // créer un context AuthContext 
                // contenir const [user, setUser ] = useState({})
                // au lieu de faire un console.log(user)
                // setUser() du user 
                // stocker user dans le localStorage du navigateur 

                // veuillez déployer le projet en l'état sur Netlify 
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

  return (
    <div>
        <button onClick={googleHandler}>authentification via votre compte GMail</button>
    </div>
  )
}

export default Login