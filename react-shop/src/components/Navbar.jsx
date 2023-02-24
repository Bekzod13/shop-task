import { memo, useEffect, useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/Context';
import api from '../api/Api';

// import icons
import {FiSearch} from 'react-icons/fi';
import {BsBasket3} from 'react-icons/bs';

const Navbar = () => {
    const searchRef = useRef();
    const [cartCount, setCartCount] = useState(0);

    const navigate = useNavigate();
    const {token, user, setUser, setKey} = useStateContext();

    useEffect(()=>{
      api.get('/user')
        .then(({data})=>{
          setUser(data);
        });
    }, []);

    api.get(`/cart/cartCount/${user.id}`)
    .then(({data})=>{
      setCartCount(data.cartProductsCount);
    })

    const search = (e) => {
      setKey(searchRef.current.value);
      return navigate('/search')
    }
  return (
    <nav>
      <header className="container">
        <Link to="/" className="nav-logo">SHOP TASK</Link>
        <form className="search-box" >
            <input type="text" required placeholder='Search shop task ...' ref={searchRef} />
            <button type="button" onClick={search} ><FiSearch/></button>
        </form>
        <div className="nav-right">
            {
                token ? <>
            <Link to='/orders' className="nav-link">Orders</Link>
            <Link to='/account' className="nav-link">{user.name}</Link>
                </>:
            <Link to='/signin' className="nav-link">Sign in</Link>
            }
            <Link to='/cart' className="nav-cart">
                <span>{cartCount}</span>
                <div className="nav-cart-icon">
                    <BsBasket3/>
                </div>
            </Link>
        </div>
      </header>
    </nav>
  );
}

export default memo(Navbar);
