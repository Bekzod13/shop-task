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

  return (
    <>
        <Carusel banners={banners} />
        <Title title={'New Products'} />
        <Latest/>
    </>
  );
}

export default Home;
