import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/Api';
import Title from '../components/Title';
import { useStateContext } from '../context/Context';

const Show = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({title: ""});
    const {user, setMessage} = useStateContext();

    useEffect(() => {
        api.get(`/products/${id}`)
            .then(({data})=>{
                setProduct(data.product);
                console.log(data.product);
            })
    }, [id]);

    const create = (e) => {
      e.preventDefault();
      const payload = {
        user_id: user.id,
        product_id: product.id,
      }
      api.post('/cart/create', payload)
        .then(({data})=>{
          setMessage(data)
        });

    }

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
               <h3>Available sizes: {
                product.sizes.length === 0 ?
                <div className="show-size">No sizes</div>:
                  product.sizes.map(size=>(
                    <div key={size} className="show-size">{size}</div>
                  ))
                } </h3>
               <form action="" onSubmit={create} >
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
