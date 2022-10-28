import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from "../config/firebase";
import { addUser } from "../config/mongodb";
import { useRouter } from "next/router";
import * as Realm from 'realm-web';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState("Calebu");
  const [allUser, setAllUser] = useState([]);
  const [loader, setLoader] = useState(false)
  const [isExist, setIsExist] = useState(false)
  const [loading, setLoading] = useState(true);
  const [RegErrorMessage, setErrorMessage] = useState("");
  const [LogErrorMessage, setLogErrorMessage] = useState("")
  const router = useRouter()
  const [data, setData] = useState({
    name: '',
    email: '',
    department: '',
    matric: '',
    password: '',
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        })

      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])


  const fetchAllProducts = async () => {
    const REALM_APP_ID = "napes-website-wawfl";
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();

    try {
      const user = await app.logIn(credentials);
      const allProducts = await user.functions.getAllUsers();

      setAllUser(allProducts);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchAllProducts()
  }, [])

  const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password).then(cred => {
      addUser(cred.user.uid, data.name, `${cred.user.email}`, data.matric, data.department)
      // const objID = cred.user.uid;
      // const fil = allUser.some((o) => data.matric === o.matric)
      // if (!fil) {


      // } else {
      //   console.log("Inside...")

      // }

    }).catch(error => {
      console.log(error.code);

      setLoader(false)
      switch (error.code) {

        case 'auth/email-already-in-use':
          setErrorMessage("Email already exist")

          break;
        case 'auth/missing-email':
          setErrorMessage("Please Enter An Email Address");
          break;
        case 'auth/invalid-email':
          setErrorMessage("Please Enter A Valid Email Address");
          break;

      }
    })

  }
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password).then((cred) => [

    ]).catch(error => {
      setLoader(false)
      console.log(error.code);

      switch (error.code) {
        case 'auth/user-not-found':
          setLogErrorMessage("You are not Registered!");
          break;
        case 'auth/internal-error':
          setLogErrorMessage("Please enter your password correctly...")

        case 'auth/wrong-password':
          setLogErrorMessage("Please enter a correct password")

          break;
        case 'auth/missing-email':
          setLogErrorMessage("Please Enter An Email Address");
          break;
        case 'auth/invalid-email':
          setLogErrorMessage("Please Enter A Valid Email Address");
          break;

      }

    })
  }

  const logout = async () => {
    setUser(null);
    setLoader(false)
    await signOut(auth)
  }
  return <AuthContext.Provider value={{ user, allUser, login, register, logout, setName, name, data, setData, RegErrorMessage, LogErrorMessage, setLoader, loader }}>
    {loading ? null : children}
  </AuthContext.Provider>
}