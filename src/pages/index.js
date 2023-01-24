import axios from 'axios';
import {useRouter} from 'next/router';
import React, {useContext, useEffect, useState} from 'react';
import Layout from '../components/Layout';
import {ProductsContext} from '../state/ProductsContext';
import ProductList from "../components/Product/product-list";

const Home = () => {
    const {products, loading} = useContext(ProductsContext);

    return (
        <Layout>
            <main>
                {loading && <p>Loading...</p>}
                {products &&
                    products.length > 0 &&
                    <ProductList title={"Oyunlar"} products={products}/>}
            </main>
        </Layout>
    );
};

export default Home;
