import {createContext, useState, useContext} from 'react';

const Context = createContext({
    user: null,
    token: null,
    error: null,
    setUser: ()=>{},
    setToken: ()=>{},
    setError: ()=>{},
});

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({name:""});
    const [token, _setToken] = useState(localStorage.getItem('TOKEN'));
    const [error, setError] = useState('');
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
        error,
        setToken,
        setUser,
        setError
    }
    return (
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    )
};

export const useStateContext = () => useContext(Context);