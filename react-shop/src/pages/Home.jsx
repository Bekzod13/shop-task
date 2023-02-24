import { useEffect, useState } from "react";
import api from "../api/Api";
import Carusel from "../components/Carusel";
import Latest from "../components/Latest";
import Title from "../components/Title";

const Home = () => {

    const [banners, setBanners] = useState([]);
    useEffect(()=>{
        api.get('/banners')
            .then(({data})=>{
                setBanners(data.banners.data);
            });
    }, []);

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        api.get('/products')
            .then(({data})=>{
                setProducts(data.products)
            })
    }, []);

  return (
    <>
        <Carusel banners={banners} />
        <Title title={'New Products'} />
        <Latest products={products}/>
    </>
  );
}

export default Home;
