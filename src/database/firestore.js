import { db, collectionRef } from "../../config/firebase"
import { getFirestore, collection, getDocs,
        addDoc, deleteDoc, doc
    } from "firebase/firestore";

// collection reference
const coursesRef = collection(db, 'all_course_information')
const usersRef = collection(db, 'user_information')


// read access to collection data
getDocs(collectionRef)
  .then((snapshot) => {
    console.log(snapshot.docs)
    let items = []
    snapshot.docs.array.forEach(element => {
        items.push({...element.data, id:element.id })
    });
  })

// add access to collection data
const addCourse = document.querySelector('.add')
addCourse.adEventListener('submit', (e) => {
    e.preventDefault()
    // "collection reference, object, "
    addDoc(collectionRef, { })
    .then(() =>{

    })
})