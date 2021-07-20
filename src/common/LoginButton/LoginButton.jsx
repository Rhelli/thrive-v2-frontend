import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth();
  
  return (
    <button onClick={() => loginWithRedirect()}>Login</button>
  );
};

export default LoginButton;
