import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../firebase';

export default function Header() {
  const [userAuth, setUserAuth] = useState(null);

  const handleGoogleLogin = () => {
    login().then(setUserAuth);
  };

  return (
    <header className='w-full p-4 px-8 flex justify-between items-center border-b border-gray-800 text-base'>
      <Link to='/products' className='px-4 py-2'>
        Products
      </Link>
      <Link to='/'>
        <img className='w-32 h-full' src='/images/logo.png' alt='core logo' />
      </Link>
      <Link to='/carts' className='px-4 py-2'>
        Carts
      </Link>
      {/* <Link to='/products/new' className='px-4 py-2'>
        New
      </Link> */}
      <section className='flex items-center gap-1'>
        {userAuth && (
          <div className='flex items-center gap-2'>
            <img
              src={userAuth.photoURL}
              alt='user profile'
              className='w-7 rounded-2xl'
            />
            <p>{userAuth.displayName}</p>
          </div>
        )}
        <button className='px-4 py-2' onClick={handleGoogleLogin}>
          {userAuth ? 'Logout' : 'Login'}
        </button>
      </section>
    </header>
  );
}
