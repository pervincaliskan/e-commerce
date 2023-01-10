import { createContext, useEffect, useReducer } from 'react';


const intialAuthState = {
    isModalOpen: false,
    formType: 'login',
    session: null,
    userDetails: null,
};

export const AuthContext = createContext({
    state: intialAuthState,
    dispatch: () => { },
});

// Reducer
const authReducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_AUTH_MODAL':
            return {
                ...state,
                formType: action.formType,
                isModalOpen: true,
            };
        case 'CLOSE_AUTH_MODAL':
            return {
                ...state,
                isModalOpen: false,
            };
        case 'LOGIN':
            return {
                ...state,
                session: action.session,
            };
        case 'LOGOUT':
            return {
                ...state,
                session: null,
            };
       

    }
};
//Provider
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, intialAuthState);

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;