import { useEffect, useState } from "react";
import api from "../api/Api";
import Title from "../components/Title";
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

    let price = 0;
    cartProducts.map(i=>{
         if (i.discount === '') {
            price += Number(i.price);
        }else{
            price += Number(i.discount);
        };
    });

    const deleteProduct = (id) => {
        api.post(`/cart/delete/${id}`)
            .then(({data})=>{
                console.log(data);
            })
    }

  return (
    <>
    <Title title={'Your cart'}/>
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
                            price: {product.discount === null ? 
                            <>
                                ${product.price} 
                            </>
                            : 
                            <>
                                <del>${product.price}</del> | ${product.discount} 
                            </>}
                        </h4>
                        <button onClick={()=>deleteProduct(product.id)} className="addToCartBtn">
                            Remove from cart
                        </button>
                    </div>
                ))
            }
        </div>
        <div className="cart-details">
            <h2>Your cart have {cartProducts.length} items</h2>
            <h3>Price: ${price}</h3>
            <button className="addToCartBtn">Check out</button>
        </div>
    </div>
    </>
  );
}

export default Cart;
