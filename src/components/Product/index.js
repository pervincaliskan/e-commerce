import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../state/CartContext';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';

const Product = (product) => {
  const { cartState, removeFromCart, addToCart } = useContext(CartContext);

  const [loading, setLoading] = useState(false);

  const handleCartOperation = async (operation) => {
    setLoading(true);
    await operation;
    setLoading(false);
  };

  return (
    <div
      className="flex flex-col p-4 space-y-2 transition transform border hover:scale-105 hover:border-black border-black/30"
      key={product.id}
    >
      <h3 className="text-xl font-semibold truncate">{product.name}</h3>
      <p className="truncate">{product.description}</p>
      <div className="relative aspect-video">
      
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
       
      </div>
      <p>
        <span className="text-gray-600">${product.price}</span>
      </p>
      <div className="lg:space-x-2 lg:space-y-0 space-x-0 space-y-2 flex-col flex lg:flex-row w-full">
        <button className="py-0.5 h-full text-lg w-full bg-black hover:text-black hover:bg-white
         border-black border text-white rounded">
          Buy now
        </button>
        
          <button className="py-0.5 h-full text-lg w-full bg-black hover:text-black hover:bg-white
         border-black border text-white rounded" >
             Add to cart
            </button>
     
      </div>
    </div>
  );
};

export default Product;
