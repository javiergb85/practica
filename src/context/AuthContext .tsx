import React, {createContext, useMemo, useReducer, useCallback} from 'react';
import {authReducer} from './AuthReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// lo usaremos para decirle a react como luce y que expone el contexto

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

// crear el Contexto

export const AuthContext = createContext({} as AuthContextProps);

// componente proveedor del estado

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = useCallback(() => dispatch({type: 'signIn'}), [dispatch]);

  const value = useMemo<AuthContextProps>(
    () => ({authState: authState, signIn: signIn}),
    [authState, signIn],
  );

  return (
    <AuthContext.Provider
      //  value={{
      //  authState: authState, // en ECMA script 6 cuando el valor y el nombre del objeto son iguales no es necesario colocar el valor solo dejan el nombre
      //signIn: signIn, //seria lo mismo que colocar signIn:signIn
      //}}
      value={value}>
      {children}
    </AuthContext.Provider>
  );
};
