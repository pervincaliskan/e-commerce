import React, {useContext, useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {CartContext} from "../../state/CartContext";
import {FaSpinner} from "react-icons/fa";

const ProductCard = ({product, cartState, removeFromCart, addToCart}) => {
    const [loading, setLoading] = useState(false);

    const handleCartOperation = async (operation) => {
        setLoading(true);
        await operation;
        setLoading(false);
    };

    return (
        <div key={product.id}
             className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href={`/detail/${product.id}`}>
                <img className="p-8 rounded-t-lg" src={product.image}
                     alt={product.name}/>
            </a>
            <div className="px-5 pb-5">
                <a href={`/detail/${product.id}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.name}
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <p className="text-sm mr-2 py-0.5">
                        {product.description}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                        {product.price} ₺
                                    </span>
                    {!cartState[product.id] && !loading && (
                        <button
                            className="text-white bg-purple-700 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => addToCart(product)}
                            disabled={loading}
                        >
                            Sepete Ekle
                        </button>
                    )}

                    <div className="flex items-center justify-center">
                        {loading && <FaSpinner className="w-full text-lg animate-spin"/>}
                    </div>
                    {cartState[product.id] && !loading && (
                        <div className="flex items-center justify-center gap-x-4">
                            <button
                                className="text-white bg-purple-700 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => handleCartOperation(removeFromCart(product))}
                                disabled={loading}
                            >
                                <AiOutlineMinus/>
                            </button>
                            {cartState[product.id]}
                            <button
                                className="text-white bg-purple-700 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => handleCartOperation(addToCart(product))}
                                disabled={loading}
                            >
                                <AiOutlinePlus/>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function ProductList({title, products}) {
    const {cartState, removeFromCart, addToCart} = useContext(CartContext);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => <ProductCard
                        cartState={cartState}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        key={product.id}
                        product={product}/>)}
                </div>
            </div>
        </div>
    )
}