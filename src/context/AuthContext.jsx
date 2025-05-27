import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (accessToken) {
      try {
        const decodedToken = jwtDecode(accessToken);
        const isExpired = decodedToken.exp * 1000 < Date.now(); // cek apakah token expired
  
        if (isExpired) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('user');
          dispatch({ type: 'LOGOUT' });
        } else if (user) {
          dispatch({ type: 'LOGIN', payload: user });
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });
      }
    } else if (user) {
      // Jika tidak ada token tetapi ada user, berarti user login tanpa token
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
