import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  limit,
  getDoc,
  doc,
  Timestamp,
  addDoc,
  writeBatch,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3rBO3bGmD24T_wspCwEDUn6hiQ_iFD3w",
  authDomain: "e-commerce-coderhouse-69b49.firebaseapp.com",
  projectId: "e-commerce-coderhouse-69b49",
  storageBucket: "e-commerce-coderhouse-69b49.appspot.com",
  messagingSenderId: "1091591547497",
  appId: "1:1091591547497:web:7842113fda12a7d98d50f8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getProducts = (key, operador, value) => {
  return new Promise((resolve, reject) => {
    const collectionQuery =
      key && operador && value
        ? query(collection(db, "items"), where(key, operador, value), limit(8))
        : query(collection(db, "items"), limit(12));

    getDocs(collectionQuery)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    getDoc(doc(db, "items", id))
      .then((querySnapshot) => {
        resolve({ id: querySnapshot.id, ...querySnapshot.data() });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getOrder = (orderId) => {
  return new Promise((resolve, reject) => {
    getDoc(doc(db, "orders", orderId))
      .then((querySnapshot) => {
        resolve({ id: querySnapshot.id, ...querySnapshot.data() });
      })
      .catch((error) => reject(error));
  });
};

export const firestoreSetOrder = (arrayItems, formData, total) => {
  return new Promise((resolve, reject) => {
    const batch = writeBatch(db);
    const outOfStock = [];
    arrayItems.forEach((item) => {
      getDoc(doc(db, "items", item.id)).then((documentSnapshot) => {
        if (documentSnapshot.data().stock >= item.quantity) {
          batch.update(doc(db, "items", documentSnapshot.id), {
            stock: documentSnapshot.data().stock - item.quantity,
          });
        } else {
          outOfStock.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        }
      });
    });

    if (outOfStock.length === 0) {
      const shopoutForm = {
        buyer: {
          name: formData.name.value,
          phone: formData.phone.value,
          email: formData.email.value,
        },
        items: [...arrayItems],
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      addDoc(collection(db, "orders"), shopoutForm).then(({ id }) => {
        batch
          .commit()
          .then(() => {
            resolve(id);
          })
          .catch((error) => reject(error));
      });
    }
    if (outOfStock.length > 0) {
      reject("Stock < quantity", outOfStock);
    }
  });
};

// Auth firebase

const auth = getAuth();
export const registerEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);

      sendEmailVerification(user).then(() => {
        console.log("Email enviado");
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
};
