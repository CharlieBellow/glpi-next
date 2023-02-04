import { AuthContext } from '../Contexts/AuthContext';
import React, { useContext } from 'react';

import { ChakraProvider } from "@chakra-ui/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { useRouter } from "next/router";
import {useEffect} from "react"


function App () {
  const router = useRouter()

  const { auth }: any = useContext( AuthContext );
  //console.log( "auth", auth );

  useEffect(() => {
    if(auth) {
      router.push( "privatesroutes", "dashboard") 
    } else {
      router.push("publicroutes/Login", "login")
    }
  }, [auth])

  return (
    <>

      
    
      <ToastContainer />
       

    </>
  );
}

export default App;