import { AuthContext, useAuth } from '../Contexts/AuthContext';
import React, { useContext } from 'react';

import { ChakraProvider } from "@chakra-ui/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { useRouter } from "next/router";
import {useEffect} from "react"


function App () {
  const router = useRouter();

  const { auth } = useAuth();


  //const { auth }: any = useContext( AuthContext );
  console.log( "auth App", auth );

  useEffect( () => {
    // inverter a lógica depois que conseguir fazer o contexto funcionar
    if ( auth ) {
      router.push( "privateroutes/dashboard", "/" );
    } else {
      router.push( "publicroutes/Login", "login" );
    }
  }, [  ] )


  return (
    <>

    
    
      
       

    </>
  );
}

export default App;