import React from "react";

export const ShoppingCart = ({
                                 cart,
                                 totalPrice,
                                 handleCheckout
                             }) => {
    return (
        <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
                <div className="w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Sepetim</h1>
                        <h2 className="font-semibold text-2xl">{cart.length} Ürün</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Ürün Detayı</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Fiyat</h3>
                    </div>
                    {cart.map(product => (
                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="w-20">
                                    <img className="h-24"
                                         src={product.image} alt={product.name}/>
                                </div>
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">{product.name}</span>
                                    <span className="text-red-500 text-xs">{product.description}</span>
                                    <a href="#"
                                       className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                </div>
                            </div>
                            <span className="text-center w-1/5 font-semibold text-sm">{product.price} ₺</span>
                        </div>
                    ))}
                </div>

                <div id="summary" className="w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Sepet Özetı</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
                        <span className="font-semibold text-sm">{totalPrice} ₺</span>
                    </div>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Toplam</span>
                            <span>{totalPrice} ₺</span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                            Satın Al
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}