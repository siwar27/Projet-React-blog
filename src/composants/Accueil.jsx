import React , {useContext , useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import  Form  from './Form';
import {db} from "../config/firebase"
import { collection, getDocs , doc , deleteDoc } from "firebase/firestore";
import mario from "../assets/mario.jpg"


function Accueil({nom}) {
  const {isLogged} = useContext(AuthContext);
  const getNotes = async () => {
      const notesSnapshot = await getDocs(collection(db, "articles"));
      const notesList = notesSnapshot.docs.map((doc) => {
        return {...doc.data(), id : doc.id }
      });
      setArticles(notesList);
  };

  const [articles, setArticles] = useState([])
  const [update, setUpdate] = useState(true)
  useEffect( function(){
    getNotes()
  }, [update])

  async function supprimer(id){
    const ref = doc(db, "articles", id)
    await deleteDoc(ref)
    setUpdate(!update);
  }

  return (
    <div>
      <h1>Bienvenue {nom}</h1>
      
      {isLogged() ? <Form setUpdate={setUpdate} /> : <section className='g-2 mb-3'>
        <img src={mario} alt="" className='max-w'/>
        <img src="pikachu.jpg" alt="" className='max-w'/>
        <img src="https://via.placeholder.com/700x200" alt="" className='max-w'/>
      </section>}
      <main>
        { articles.map(function(item, key){
          return <article key={key}>
            <h2>{item.titre}</h2>
            <p>{item.body}</p>
            <p>{item?.dt_creation && "Publié le : "} {item?.dt_creation && new Intl.DateTimeFormat("fr-FR").format(new Date(item?.dt_creation?.seconds *1000))}</p>
            {isLogged() && <>
              <button className='me-3'>update</button>
              <button onClick={function(){ supprimer(item.id)  }}>delete</button>
            </>}
          </article>
        }) }
      </main>
    </div>
  )
}

export default Accueil