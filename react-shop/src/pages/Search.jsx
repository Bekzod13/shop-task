import { useEffect, useState } from "react";
import api from "../api/Api";
import Latest from "../components/Latest";
import Title from "../components/Title";
import { useStateContext } from "../context/Context";

const Search = () => {
    const [products, setProducts] = useState([]);
    const {key} = useStateContext();
    useEffect(()=>{
        api.get(`/products/search/${key}`)
            .then(({data})=>{
                setProducts(data.products)
            })
    }, []);
  return (
    <>
        <Title title={'Found products'} />
        <Latest products={products} />
    </>
  );
}

export default Search;