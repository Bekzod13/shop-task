import {createContext, useState, useContext} from 'react';

const Context = createContext({
    user: null,
    token: null,
    message: null,
    key: null,
    setUser: ()=>{},
    setToken: ()=>{},
    setMessage: ()=>{},
    setKey: ()=>{},
});

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({name:""});
    const [key, setKey] = useState('');
    const [token, _setToken] = useState(localStorage.getItem('TOKEN'));
    const [message, setMessage] = useState('');
    const setToken = (token) => {
        console.log(token);
        _setToken(token);
        if(token){
            localStorage.setItem("TOKEN", token);
        }else{
            localStorage.removeItem('TOKEN');
        }
    };
    const contextValues = {
        user,
        token,
        key, 
        message, 
        setToken,
        setUser,
        setKey,
        setMessage,
    }
    return (
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    )
};

export const useStateContext = () => useContext(Context);