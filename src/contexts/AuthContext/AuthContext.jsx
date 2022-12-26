import { createContext, useContext, useReducer } from "react";
import AuthReducer from "../../reducers/AuthReducer/AuthReducer";

const initalAuthState = {
     email:'',
     password:'',
     confirmPassword: '',
     firstName:'',
     lastName:'',
     login : false,

};

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(AuthReducer, initalAuthState);
    return(
        <AuthContext.Provider value={{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, useAuth};