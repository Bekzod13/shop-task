import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/Context';
import api from '../api/Api';

// import icons
import {FiSearch} from 'react-icons/fi';
import {BsBasket3} from 'react-icons/bs';

const Navbar = () => {
    const {token, user, setUser} = useStateContext();
    useEffect(()=>{
      api.get('/user')
        .then(({data})=>{
          setUser(data);
        })
    }, [])

  return (
    <nav>
      <header className="container">
        <Link to="/" className="nav-logo">SHOP TASK</Link>
        <div className="search-box">
            <input type="text" placeholder='Search shop task ...' />
            <button type="submit"><FiSearch/></button>
        </div>
        <div className="nav-right">
            {
                token ? <>
            <Link to='/orders' className="nav-link">Orders</Link>
            <Link to='/account' className="nav-link">{user.name}</Link>
                </>:
            <Link to='/signin' className="nav-link">Sign in</Link>
            }
            <Link to='/cart' className="nav-cart">
                <span>0</span>
                <div className="nav-cart-icon">
                    <BsBasket3/>
                </div>
            </Link>
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
