import React, { ReactNode, useState } from 'react';
import Link from 'next/link'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import Spinner from './Spinner';


const LoginModal = ({ registerModal, loginModal, modal }) => {
  const { user, login } = useAuth()
  const [loader, setLoader] = useState(false)
  const router = useRouter()
  const [data, setData] = useState({
    name: '',
    matric: '',
    email: '',
    password: ''
  });



  const loginUser = async (e) => {
    e.preventDefault();
    setLoader(true)

    try {
      await login(data.email, data.password);
      if (user) {
        loginModal(false);
        router.push("/contact")
      }
    } catch (error) {
      console.log(error);
    }
  }


  const toggleAuthentication = async () => {


    loginModal((prev) => false)
    registerModal(true);
    console.log(modal)

  }
  return (
    <div className='bg-overlay fixed right-0 left-0 top-0 bottom-0 z-10'>
      <div className='-translate-y-1/2 -translate-x-1/2 left-1/2 fixed top-1/2 flex flex-col items-center justify-center'>

        <form className='bg-white w-96 px-10 py-5 shadow-md rounded flex flex-col  justify-center space-y-5'>
          <h2 className='text-2xl text-blue-900 font-bold text-center'>Login</h2>
          <div>
            <label className='text-xl' htmlFor="departmenet">Email: </label>
            <input className='input' value={data.email} onChange={(e) => setData({
              ...data, email: e.target.value
            })} type="text" required />
          </div>

          {/* <input className='input' value={data.matric} onChange={(e: any) => setData({
            ...data, matric: e.target.value
          })} placeholder='Matric No' type="text" /> */}
          <div>
            <label className='text-xl' htmlFor="password">Password: </label>
            <input className='input' value={data.password} onChange={(e) => setData({
              ...data, password: e.target.value
            })} placeholder='Enter Password' type="password" required />
          </div>
          {loader ? <Spinner />
            :
            <button onClick={loginUser} className='button hover: shadow-sm border transition ease-in-out duration-200 hover:bg-red-600 hover:text-white'>Login</button>
          }
          <span>Not registered? <span onClick={toggleAuthentication}><span className='text-blue-500 cursor-pointer underline text-xl'>Register</span></span> </span>
        </form>
      </div>

    </div>
  )
}

export default LoginModal