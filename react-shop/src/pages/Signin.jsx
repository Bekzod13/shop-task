import { memo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/Api';
import { useStateContext } from '../context/Context';

const Signin = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const [showPassword, setShowPassword] = useState(false);


    const {
        token,
        setToken,
        setUser
    } = useStateContext();
    const signin = (e) => {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        api.post('/signin', payload)
            .then(({ data }) => {
                // console.log(data);
                setToken(data.token);
                setUser(data.user);
            });
    }
    return (
        <div className='sign'>
            <h1>SHOP TASK</h1>
            <form action="" onSubmit={signin}>
                <h2>Sign in</h2>
                <input ref={emailRef} type="email" placeholder='Enter your email' />
                <input ref={passwordRef} type={showPassword ? "text" : "password"} placeholder='Enter your password' />
                <button className='showPasswordBtn' type='button' onClick={() => setShowPassword(!showPassword)}>show password</button>
                <button type="submit">Sign in</button>
            </form>

            <Link to="/signup" className="sign-link">Create new account</Link>
        </div>
    );
}

export default memo(Signin);
