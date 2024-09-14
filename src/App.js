import './App.css';
import { useState, useEffect} from "react"
import {db} from './firebase-config'
import { addDoc, collection,getDocs, updateDoc ,doc, deleteDoc} from "firebase/firestore"

function App() {
  const [users , setUsers] = useState([]);
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const userCollection = collection (db, "users")

const createUser = async() =>{
  await addDoc( userCollection, {name:newName, age: Number(newAge)})
}

const updateUser = async(id,age)=>{
  const userDoc = doc(db, "users", id)
   const newFeilds = {age : age + 1}
   await updateDoc(userDoc, newFeilds)
}
 const deleteUser = async(id)=>{
  const userDoc = doc(db, "users", id)
  await deleteDoc (userDoc)
 }

  useEffect(()=>{
   const getUsers = async()=>{
   const data = await getDocs(userCollection);
   setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
   }
   getUsers()
  },[])
  


  return (
   <>
   <h1>hello firebase</h1>
   <input type="text" placeholder="Name..." value={newName} onChange={(e)=>{setNewName(e.target.value)}}/>
   <input type="number" placeholder="Age..." value={newAge} onChange={(e)=>{setNewAge(e.target.value)}}/>
   <button onClick={createUser}>Add User</button>
   {users.map((user)=>{
    return (
      <div>
        {" "}
        <h1>
          Name:{user.name}
        </h1>
        <h1>
          Age:{user.age}
        </h1>
        <button onClick={()=>{ updateUser(user.id, user.age)}}>
          {""}
          Edit Age
        </button>
        <button onClick={()=>{ deleteUser(user.id)}} >
          {""}
          Delete
        </button>
      </div>
    )})}
   </>
  );
}

export default App;
