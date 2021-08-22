import {AuthState} from './AuthContext ';

type AuthAction = {
  type: 'signIn';
};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn': {
      // nunca mutar un estado es decir cambiar la propiedad del estado y devolver el valor porque react no sabrá que el estado cambio
      // se debe devolver un nuevo estado usando el spread operator tambien conocido como destructuring
      return {...state, isLoggedIn: true, username: 'no-username-yet'};
    }

    default:
      return state;
  }
};
