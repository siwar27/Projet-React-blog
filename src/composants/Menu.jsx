import React , {useContext} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

function Menu() {
    const {isLogged , setUser} = useContext(AuthContext);
    const navigate = useNavigate()
    function logout(){
        signOut(auth)
        .then(() => {
            localStorage.removeItem("authentification");
            console.log('logged out');
            navigate('/');
            setUser({})
        })
        .catch((error) => {
            console.log(error);
        });
    }

  return (
    <div className='menu'>
        <ul>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            {isLogged() ? 
            
            <li>
                <button onClick={ logout }>déconnexion</button>
            </li> 
            : 
            <li>
                <Link to="/login">Connexion</Link>
            </li>}
            
        </ul>
    </div>
  )
}

export default Menu