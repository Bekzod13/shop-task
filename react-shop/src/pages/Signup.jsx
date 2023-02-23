import {memo, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../api/Api';
import { useStateContext } from '../context/Context';

const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [showPassword, setShowPassword] = useState(false);

    const {
        error, 
        setError,
        setToken,
        setUser
    } = useStateContext();

    const signup = (e) => {
        e.preventDefault();
        if(passwordRef.current.value === passwordConfirmRef.current.value){
            const payload = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                phone: phoneRef.current.value,
            }
            api.post('/signup', payload)
                .then(({data})=>{
                    setToken(data.token);
                    setUser(data.user);
                })
                .catch(error=>{
                  const response = error.response;
                  if(response && response.status === 422){
                    console.log(response.data.errors);
                  }
                })
        }else{
            setError('Password is wrong!!!');
        }

    }
  return (
    <div className='sign'>
        {error !== '' && <p className='error'>{error}</p>}
      <h1>SHOP TASK</h1>
      <form action="" onSubmit={signup}>
        <h2>Sign up</h2>
        <input ref={nameRef} type="text" placeholder='Enter your name' />
        <input ref={emailRef} type="email" placeholder='Enter your email' />
        <input ref={phoneRef} type="number" placeholder='Enter your number' />
        <input ref={passwordRef} type={showPassword ? "text" : "password"} placeholder='Enter your password' />
        <input ref={passwordConfirmRef} type={showPassword ? "text" : "password"} placeholder='Confirm your password' />
        <button className='showPasswordBtn' type='button' onClick={()=>setShowPassword(!showPassword)}>show password</button>
        <button type="submit">Sign up</button>
      </form>

      <Link to="/signup" className="sign-link">Already have an account</Link>
    </div>
  );
}

export default memo(Signup);
