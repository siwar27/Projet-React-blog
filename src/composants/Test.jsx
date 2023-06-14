import React ,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import Accueil from './Accueil'


function Test() {
    const {user} = useContext(AuthContext)
  return (
    <div>
        <Accueil nom={user.displayName}/>
    </div>
  )
}

export default Test