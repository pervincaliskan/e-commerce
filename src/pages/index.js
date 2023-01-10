import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, {  useEffect, useState } from 'react';
import Layout from '../components/Layout';


const Home = () => {
  const router  = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const data = await axios.get("api/products");
      console.log(data.data);
      setProducts(data.data);
    }
    getProduct();
  }, []);

  return ( <layout> 
    <div className="w-full h-full flex flex-col ">
      <header className="w-full h-32 bg-gray-200 flex items-center justify-end space-x-4-px-4">
        <h1 className="mr-auto text-2xl font-light ">
          E-Commerce web app with Next.js
        </h1>
        <div className="">
          <button
            className="px-4 py-2 text-lg bg-black  hover:text-black
             hover:bg-white border-black border  text-white roundend"
          >
            Sign up
          </button>
        </div>

        <div className="">
          <button
            className="px-4 py-2 text-lg bg-black  hover:text-black
            hover:bg-white border-black border  text-white roundend"
          >
            Log In
          </button>
        </div>

        <div className="">
          <button
            className="px-4 py-2 text-lg bg-black  hover:text-black
             hover:bg-white border-black border  text-white roundend" onClick={ 
              ()=>router.push('/admin')
            }>
          
            Admin
          </button>
        </div>
      </header>
      <main>
        {" "}
        <section className="my-4 p-4 grid grid-cols-3 gap-6 lg:grid-cols-4">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <div
                className="p-4 hover:scale-105 hover:border-black flex space-y-2 transition transform 
                flex-col border border-black/50"
                key={product.id}
              >
                <h3 className="font-xl font-semibold truncate"> {product.name}</h3>
                <p className="turuncate">{product.description}</p>
                <div className="aspect-video relative">
                {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            />
            )}
              
            </div>
            <p>
              <span className="text-gray-600">${product.price}</span>
            </p>
            <div className="flex flex-col w-full space-x-0 space-y-2 lg:justify-center lg:items-center lg:space-x-2 lg:space-y-0 lg:flex-row">
              <button className="p-2 text-lg text-white bg-black border border-black rounded hover:text-black hover:bg-white">
                Buy now
              </button>
              <button className="p-2 text-lg text-white bg-black border border-black rounded hover:text-black hover:bg-white">
                Add to cart
                </button>
                </div>
              </div>
            ))}
        </section>
      </main>
   
    </div></layout>
  );
};
export default Home;
