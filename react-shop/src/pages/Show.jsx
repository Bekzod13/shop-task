import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/Api';
import Title from '../components/Title';

const Show = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({title: ""});

    useEffect(() => {
        api.get(`/products/${id}`)
            .then(({data})=>{
                setProduct(data.product);
            })
    }, [id]);

  return (
    <div className='container show-bg'>
        {product.title === '' ? 
        <div className='loading'>Loading ...</div>: <>

      <Title title={product.title}/>
      <div className="container show">
        <div className="show-main">
            <div className="show-img">
                <img src={product.image} alt={product.title} />
            </div>
            <p>{product.description}</p>
        </div>
            <div className="show-details">
                <h3>Price: ${product.discount === 0 ? 
                product.price: 
                <>
                    <del>{product.price}</del> | ${product.discount}
                </>
               } </h3>
               <h3>Count: {product.count}</h3>
               <h3>Date: {product.updated_at}</h3>
               <form action="" >
                <button className='addToCartBtn' type="submit">Add to cart</button>
               </form>
            </div>
      </div>
      </>
      }
    </div>
  );
}

export default Show;
