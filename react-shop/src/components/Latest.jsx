import {useState, useEffect} from 'react';
import api from '../api/Api';
import {Link} from 'react-router-dom';

const Latest = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        api.get('/products')
            .then(({data})=>{
                setProducts(data.products.data)
            })
    }, [])
  return (
    <div className='container latest'>
      {
        products.length === 0 ? 
        <div className='loading'>Loading ...</div>:
        (

            products.map((product)=>(
                <Link to={`/product/${product.id}`} className='product-card' key={product.id}>
                    <h3>{product.title}</h3>
                    <div className="product-img">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <span>Shop now</span>
                </Link>
                ))
        )
      }
    </div>
  );
}

export default Latest;
