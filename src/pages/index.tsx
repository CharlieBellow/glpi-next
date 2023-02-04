
import { useContext } from 'react';
import { useAuth, AuthContext, AuthProvider, }  from '../Contexts/AuthContext';

import { useRouter } from "next/router";
import {useEffect} from "react"

import Dashdoard from './privateroutes/dashboard';
import { UserProvider } from '../Contexts/UserContext';
import { MenuProvider } from '../Contexts/MenuContext';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import PrivateRoutes from '../Routes/private.routes';
import PublicRoutes from '../Routes/public.routes';

import  Link  from "next/link"
import App from './App';

export default function Home () {

  //const { auth }: any = useContext( AuthContext );

  //console.log( "auth", auth );
  
  
  const router = useRouter()
  
  const { auth, changeAuth } = useAuth()


  //const { auth }: any = useContext( AuthContext );
  console.log( "auth", auth );
  console.log( "auth", auth );
  console.log( "auth type", typeof auth );
  
  useEffect(() => {
    // inverter a lógica depois que conseguir fazer o contexto funcionar
    if(auth) {
      router.push("publicroutes/Login", "login")
    } else {
      router.push( "privateroutes", "/") 
    }
  }, [auth])


  return (
    <>

      <AuthProvider>
        <UserProvider>

          <MenuProvider>
  <ChakraProvider>
          
            {/*<App />*/}
      </ChakraProvider>
              

            <ToastContainer />

          </MenuProvider>
        </UserProvider>
      </AuthProvider>

    </>
  );
}
