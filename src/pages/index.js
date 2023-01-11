import axios from 'axios';
import { useRouter } from 'next/router';
import React, {  useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Product from '../components/Product';
import Image from 'next/image';

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

 
  return (
    <Layout>
      <main>
        <section className="grid grid-cols-3 gap-6 p-4 my-4 lg:grid-cols-4">
          {loading && <p>Loading...</p>}
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
        </section>
      </main>
    </Layout>
  );
};

export default Home;
