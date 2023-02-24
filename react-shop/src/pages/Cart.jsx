import { useEffect, useState } from "react";
import api from "../api/Api";
import { useStateContext } from "../context/Context";


const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const {user} = useStateContext();

    useEffect(() => {
      api.get(`/cart/${user.id}`)
        .then(({data})=>{
            setCartProducts(data.cartProducts);
        })
    }, []);

  return (
    <div className='cart container'>
        <div className="cart-box">
            {
                cartProducts.length === 0 ? 
                <div className='loading'>Loading ...</div>:
                cartProducts.map(product=>(
                    <div key={product.id} className="cart-item">
                        <div className="cart-img">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <h3>{product.title}</h3>
                        <h4>
                            price: {product.discount === '' ? 
                            <>
                                ${product.price} 
                            </>
                            : 
                            <>
                                <del>${product.price}</del> | ${product.discount} 
                            </>}
                        </h4>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Cart;
