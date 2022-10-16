import { createContext, useReducer } from "react";

// Create data context provided to users of closest matching Provider
export const AuthenticationContext = createContext();
// Context object definition:
//  { loggedIn: boolean }

const reducer = (state, action) => {
  switch(action.type) {
    case 'TRY_LOGIN':
      if (action.payload.name === 'guest' && action.payload.password === '1234') {
        return { ...state, loggedIn: true, logFeedback: '' };
      }
      return { ...state, loggedIn: false, logFeedback: 'Bad Credentials, Try Again' };
    case 'LOGOUT':
      return { ...state, loggedIn: false };
    default:
      throw new Error();
  } // switch
}

export function AuthenticationProvider(props) {
  const [state, dispatch] = useReducer(reducer, props.initialState);

  return (
    <AuthenticationContext.Provider value={[state, dispatch]}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
