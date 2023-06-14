import React from 'react'
import {db} from "../config/firebase"
import {addDoc , collection} from "firebase/firestore"

function Form({setUpdate}) {

    async function submit(e){
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        if(data.titre.length < 3 || data.body.length < 3){
            alert("attention formulaire invalide")
            return ;
        }
        data.dt_creation = new Date(); // Date.now()
        data.status = true ; 
        await addDoc(collection(db , "articles"), data)
        
        e.target.reset();
        setUpdate(function(prevState){ return !prevState})
    }

  return (
    <div>
        <form className='form-add' onSubmit={submit}>
            <input type="text" name="titre" placeholder='saisir titre' />
            <textarea name="body" cols="30" rows="10" placeholder='saisir contenu de votre article'></textarea>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form