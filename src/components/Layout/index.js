
import { useRouter } from 'next/router';
import React, { useContext, useMemo } from 'react';
import Auth from '../Auth';
import Modal from '../Modal';


const Layout = ({ children }) => {
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);


  return (
    <div className="flex flex-col w-full h-full">
      <header className="flex items-center justify-end w-full h-32 px-4 space-x-4 bg-gray-200">

        <h1 className='mr-auto text-2xl font-light'>
          E-Commerce web app with Next.js
          </h1>

          <div className="">
            <button
              className="px-4 py-2 text-lg text-white bg-black border border-black rounded hover:text-black hover:bg-white"
              onClick={() => setOpenModal(true)
              }
            >
              Sign up
            </button>
          </div>
          <div className="">
            <button
              className="px-4 py-2 text-lg text-white bg-black border border-black rounded hover:text-black hover:bg-white"
              onClick={() => setOpenModal(true)
              }
            >
              Log In
            </button>
          </div>


          <div className="">
            <button
              className="px-4 py-2 text-lg text-white bg-black border border-black rounded hover:text-black hover:bg-white"
              onClick={() => router.push('/admin')}
            >
              Admin
            </button>
          </div>

          <div className="">
            <button
              className="px-4 py-2 text-lg text-white bg-black border border-black rounded hover:text-black hover:bg-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div className="">
            <button
              className="px-4 py-2 text-lg text-white bg-black border border-black rounded hover:text-black hover:bg-white"
              onClick={() => router.push('/cart')}
            >
              Cart - {totalCartItems}
            </button>
          </div>
        
        
      </header>
      <Modal isOpen={openModal} setIsModal={setOpenModal} title="welcome">
        <Auth />

      </Modal>
      {children}
    </div >
  );
};

export default Layout;
